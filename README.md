# CV Generator 📄

A professional, feature-rich CV/Resume generator application built with vanilla JavaScript. Create, manage, and download beautifully formatted CVs in PDF and DOCX formats with integrated Paystack payment processing.

## ✨ Features

- **User Authentication**: Secure login and registration system
- **CV Builder**: Intuitive form to create professional CVs
- **Real-time Preview**: See your CV as you build it
- **Multiple Export Formats**:
  - 📕 **PDF Download**: High-quality PDF generation
  - 📗 **DOCX Download**: Microsoft Word format
- **Data Persistence**: Automatic saving to browser storage
- **Payment Integration**: Paystack integration for premium features
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern UI**: Beautiful dark/gold color scheme

## 🚀 Quick Start

### 1. **Prerequisites**

- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Paystack account for payment processing

### 2. **Installation**

No installation required! This is a standalone HTML application.

```bash
# Clone the repository
git clone https://github.com/AdieleSolomon/CV_Gnerator.git
cd CV_Gnerator

# Open in your browser
open index.html
# or
start index.html
```

### 3. **Configuration**

#### Option A: Quick Setup (Easiest)

The application comes pre-configured with a live Paystack key. Just open and use!

#### Option B: Use Your Own Paystack Key

1. **Get Your Paystack Key**
   - Go to https://dashboard.paystack.com
   - Navigate to Settings → Developer
   - Copy your Public Key

2. **Configure in Application**

   **Method 1: Edit config.js**

   ```bash
   # Copy the example config
   cp config.example.js config.js

   # Edit config.js and add your Paystack Public Key
   # Uncomment the config.js line in index.html
   ```

   **Method 2: Edit HTML directly**
   - Open `index.html` in a text editor
   - Find: `paystackPublicKey: "pk_live_..."`
   - Replace with your key

   **Method 3: Runtime Setup**
   - Open app in browser and press F12
   - Run: `setPaystackKey("pk_live_YOUR_KEY_HERE")`

## 📖 Usage Guide

### Creating a CV

1. **Open the Application**

   ```bash
   # Double-click the HTML file or open in browser
   open index.html
   ```

2. **Register or Login**
   - Click "Register" to create a new account
   - Or "Login" if you already have an account
   - Data is stored in your browser's localStorage

3. **Build Your CV**
   - Fill in your personal information
   - Add work experience
   - Include education history
   - Add skills and certifications
   - Write a professional summary

4. **Preview Your CV**
   - Click "Preview" to see the formatted CV
   - Make adjustments as needed

5. **Download Your CV**
   - Click "Download PDF" for PDF format
   - Click "Download DOCX" for Microsoft Word format
   - File will be named: `CV_YourName.pdf` or `CV_YourName.doc`

6. **Request PIN (Optional)**
   - Click "Request PIN via Paystack"
   - Complete Paystack payment
   - Receive PIN for premium features

## 🔧 Project Structure

```
CV_Gnerator/
├── index.html                   # Main application (all-in-one HTML file)
├── config.example.js            # Example configuration file
├── CONFIG.md                    # Configuration guide
├── SETUP_INSTRUCTIONS.md        # Detailed setup guide
├── .env.example                 # Environment variables template
├── .gitignore                   # Git ignore rules
├── LICENSE                      # MIT License
└── README.md                    # This file
```

## ⚙️ Configuration

### Environment Variables

Create a `config.js` file (copy from `config.example.js`):

```javascript
const CONFIG = {
  PAYSTACK_PUBLIC_KEY: "pk_live_your_key_here",
  ENVIRONMENT: "production",
  DEBUG: false,
};
```

### Available Options

| Option                | Type    | Description                     |
| --------------------- | ------- | ------------------------------- |
| `PAYSTACK_PUBLIC_KEY` | String  | Your Paystack live public key   |
| `ENVIRONMENT`         | String  | "development" or "production"   |
| `DEBUG`               | Boolean | Enable debug logging in console |

## 🔐 Security & Best Practices

### For Development

- Use `pk_test_*` keys for testing
- Never commit real API keys to Git
- Use `.gitignore` to exclude `config.js` and `.env` files

### For Production

- Use `pk_live_*` keys only
- Keep secret keys (`sk_*`) secure on backend only
- This application only uses public keys (safe for frontend)
- Rotate keys regularly

### Data Privacy

- All user data is stored locally in browser
- No data is sent to external servers (except Paystack)
- Clear browser storage to delete all data

## 📦 Dependencies

All dependencies are loaded from CDN (no installation needed):

- **Paystack Inline** v1 - Payment processing
- **html2canvas** v1.4.1 - HTML to canvas conversion
- **jsPDF** v2.5.1 - PDF generation

## 🌐 Browser Support

| Browser | Minimum Version | Status           |
| ------- | --------------- | ---------------- |
| Chrome  | 90+             | ✅ Full Support  |
| Firefox | 88+             | ✅ Full Support  |
| Safari  | 14+             | ✅ Full Support  |
| Edge    | 90+             | ✅ Full Support  |
| IE 11   | -               | ❌ Not Supported |

## 🐛 Troubleshooting

### Issue: Payment feature not working

**Solution:**

- Check browser console (F12) for errors
- Verify Paystack key is correctly configured
- Ensure internet connection is active

### Issue: PDF download fails

**Solution:**

- Try a different browser
- Clear browser cache
- Disable browser extensions that might block downloads

### Issue: Data not saving

**Solution:**

- Check if browser allows localStorage
- Not available in private/incognito mode
- Try a different browser

### Issue: Page loads slowly

**Solution:**

- Check internet connection
- CDN libraries need to download
- Disable ad blockers temporarily

## 📝 Changelog

### v1.0.0 (Current)

- ✅ Initial release
- ✅ Complete CV builder with form
- ✅ PDF and DOCX export
- ✅ Paystack payment integration
- ✅ User authentication
- ✅ Browser-based data storage
- ✅ Responsive design

## 🤝 Contributing

Contributions are welcome! Here's how to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support & Contact

- **Issues**: Create an issue on GitHub
- **Paystack Support**: https://paystack.com/support
- **Documentation**: https://paystack.com/docs/api

## 🙏 Acknowledgments

- Built with vanilla JavaScript (no frameworks)
- Styled with custom CSS
- Icons and design inspiration from modern web standards
- Thanks to Paystack for payment processing

## 📊 Project Status

- **Status**: Active & Maintained ✅
- **Last Updated**: August 2026
- **Version**: 1.0.0

---

**Made with ❤️ by Solomon Adiele**

For more information, visit: https://github.com/AdieleSolomon/CV_Gnerator
