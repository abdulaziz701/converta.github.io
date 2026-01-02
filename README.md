# Converta Agency - SMM Marketing Website

Professional SMM marketing agency website with Telegram bot integration for contact forms.

## 🚀 Features

- ✅ Responsive design
- ✅ Multi-language support (UZ, RU, EN)
- ✅ SMM pricing packages
- ✅ Additional services showcase
- ✅ Contact form with Telegram bot integration
- ✅ Modern animations and effects

## 📱 Telegram Bot Setup

The contact form sends messages directly to Telegram using bot API.

**Configured Bot:**
- Bot Token: Already configured
- Chat ID: Already configured

## 🌐 GitHub Pages Deployment

### Option 1: Public Repository (Recommended for GitHub Pages)

1. Create a new **PUBLIC** repository on GitHub
2. Initialize git in your project:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to Settings → Pages
   - Source: Deploy from branch
   - Branch: main / (root)
   - Save

4. Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

### Option 2: Private Repository (Requires GitHub Pro)

⚠️ **Important:** GitHub Pages for private repositories requires GitHub Pro, Team, or Enterprise.

If you have GitHub Pro:
1. Create **PRIVATE** repository
2. Follow same steps as above
3. Only you can see the repository, but the website will be public

## ⚠️ Security Warning

**IMPORTANT:** The Telegram bot token is included in the JavaScript file. This means:

- ✅ Anyone who visits your website can see the token in the browser's developer tools
- ⚠️ Someone could potentially use your bot token to send spam
- ⚠️ Private repository does NOT hide the token (website is still public)

### Better Security Options:

1. **Backend API** (Most Secure)
   - Create a PHP/Node.js backend
   - Store token on server
   - Frontend calls your API

2. **Serverless Functions** (Recommended)
   - Use Netlify Functions or Vercel Serverless
   - Free and secure
   - Hide API keys

3. **Environment Variables + Build Process**
   - Use environment variables
   - Build process injects values
   - More complex setup

4. **Bot Restrictions**
   - In BotFather, use `/setdomain` to restrict bot to your domain
   - Limit damage if token is exposed

## 🛡️ Protecting Your Bot Token

If you want better security without backend:

### Deploy to Netlify (Free & Secure)

1. Create `netlify.toml`:
```toml
[build]
  publish = "."

[functions]
  directory = "netlify/functions"
```

2. Create `netlify/functions/send-telegram.js`:
```javascript
exports.handler = async (event) => {
  const { name, email, subject, message } = JSON.parse(event.body);
  
  const response = await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text: `New message from ${name} (${email})\nSubject: ${subject}\n\n${message}`
    })
  });
  
  return {
    statusCode: 200,
    body: JSON.stringify({ success: true })
  };
};
```

3. Set environment variables in Netlify dashboard
4. Update `script.js` to call your Netlify function instead

## 📦 Project Structure

```
smm/
├── index.html          # Main HTML file
├── style.css           # Styles
├── script.js           # JavaScript (includes bot token)
├── .gitignore         # Git ignore file
└── README.md          # This file
```

## 🎨 Customization

- Edit colors in `style.css` (`:root` variables)
- Update translations in `script.js` (translations object)
- Modify pricing packages in `index.html`

## 📞 Contact

For questions about the website or deployment, check the code comments or documentation.

---

**Note:** Remember to update the bot token if you revoke the old one or create a new bot!
