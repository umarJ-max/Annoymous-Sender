let currentUsername = '';

function createLink() {
    const username = document.getElementById('username').value.trim();
    
    if (!username) {
        alert('Please enter a username');
        return;
    }
    
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
        alert('Username can only contain letters, numbers, and underscores');
        return;
    }
    
    currentUsername = username;
    const shareLink = `${window.location.origin}/u/${username}`;
    
    document.getElementById('shareLink').value = shareLink;
    document.getElementById('linkSection').style.display = 'block';
    document.getElementById('messagesSection').style.display = 'block';
    
    loadMessages();
}

function copyLink() {
    const shareLink = document.getElementById('shareLink');
    shareLink.select();
    shareLink.setSelectionRange(0, 99999);
    
    try {
        document.execCommand('copy');
        alert('Link copied to clipboard!');
    } catch (err) {
        alert('Failed to copy link');
    }
}

async function loadMessages() {
    if (!currentUsername) return;
    
    try {
        const response = await fetch(`/api/messages/${currentUsername}`);
        const messages = await response.json();
        
        const messagesList = document.getElementById('messagesList');
        
        if (messages.length === 0) {
            messagesList.innerHTML = '<p style="text-align: center; color: #999;">No messages yet. Share your link to receive anonymous messages!</p>';
            return;
        }
        
        messagesList.innerHTML = messages
            .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
            .map(msg => `
                <div class="message">
                    <div class="message-text">${escapeHtml(msg.message)}</div>
                    <div class="message-time">${formatTime(msg.timestamp)}</div>
                </div>
            `).join('');
            
    } catch (error) {
        console.error('Error loading messages:', error);
    }
}

function refreshMessages() {
    loadMessages();
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function formatTime(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    
    return date.toLocaleDateString();
}