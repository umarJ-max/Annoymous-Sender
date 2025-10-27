const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Use in-memory storage for Vercel (serverless)
let messagesData = {};

// Get messages for a user
app.get('/api/messages/:username', (req, res) => {
    const { username } = req.params;
    res.json(messagesData[username] || []);
});

// Send anonymous message
app.post('/api/send', (req, res) => {
    const { to, message } = req.body;
    
    if (!to || !message) {
        return res.status(400).json({ error: 'Username and message required' });
    }
    
    if (!messagesData[to]) {
        messagesData[to] = [];
    }
    
    messagesData[to].push({
        message,
        timestamp: new Date().toISOString(),
        id: Date.now()
    });
    
    res.json({ success: true });
});

// Get share link
app.get('/u/:username', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'send.html'));
});

// Serve index.html for root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});