# 📩 Anonymous Message Sender

A modern, sleek web application that allows users to receive anonymous messages from friends and followers. Built with a beautiful dark theme featuring glassmorphism effects and smooth animations.

## ✨ Features

- **Anonymous Messaging**: Send and receive messages without revealing identity
- **Custom User Links**: Generate personalized links for receiving messages
- **Modern Dark UI**: Beautiful glassmorphism design with gradient effects
- **Real-time Updates**: Refresh messages instantly
- **Character Limit**: 500 character limit for messages
- **Responsive Design**: Works perfectly on all devices
- **Copy Link Feature**: Easy sharing with one-click copy functionality

## 🚀 Live Demo

[View Live Demo](your-deployment-url-here)

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js, Express.js
- **Data Storage**: JSON file-based storage
- **Deployment**: Vercel-ready configuration

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/anonymous-message-sender.git
   cd anonymous-message-sender
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🎨 Design Features

- **Glassmorphism Effects**: Modern blur and transparency effects
- **Dark Theme**: Eye-friendly dark color scheme
- **Gradient Animations**: Smooth hover effects and transitions
- **Responsive Layout**: Mobile-first design approach
- **Modern Typography**: Clean, readable fonts with gradient text effects

## 📱 Usage

1. **Create Your Link**
   - Enter your username (max 20 characters)
   - Click "Create My Link"
   - Copy and share your personalized link

2. **Receive Messages**
   - Share your link on social media
   - Friends can send anonymous messages
   - Check your messages anytime by refreshing

3. **Send Messages**
   - Visit someone's anonymous message link
   - Type your message (max 500 characters)
   - Send anonymously

## 🔧 API Endpoints

- `GET /` - Main page
- `GET /u/:username` - Send message page for specific user
- `POST /api/send` - Send anonymous message
- `GET /api/messages/:username` - Get messages for user

## 📁 Project Structure

```
anonymous-message-sender/
├── public/
│   ├── index.html      # Main page
│   ├── send.html       # Send message page
│   ├── style.css       # Modern dark theme styles
│   └── script.js       # Frontend JavaScript
├── server.js           # Express server
├── messages.json       # Message storage
├── package.json        # Dependencies
├── vercel.json         # Deployment config
└── README.md          # This file
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

### Manual Deployment

1. **Build for production**
   ```bash
   npm run build
   ```

2. **Deploy to your preferred hosting platform**

## 🎯 Features Roadmap

- [ ] User authentication
- [ ] Message encryption
- [ ] Custom themes
- [ ] Message reactions
- [ ] Export messages
- [ ] Admin dashboard

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Umar J**
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn URL]
- Twitter: [Your Twitter URL]

## 🙏 Acknowledgments

- Inspired by modern web design trends
- Built with love for the community
- Thanks to all contributors and users

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ by [Umar J](https://github.com/yourusername)