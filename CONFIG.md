# CV Generator - Configuration Guide

## 📋 Project Overview

This is a professional CV Generator application that allows users to:

- Create and manage CV/Resume data
- Download CV in PDF and DOCX formats
- Process payments via Paystack for premium features

## 🔧 Required Variables & Setup

### 1. **Paystack Public Key** (CRITICAL)

The application requires a valid Paystack public key to process payments.

#### Steps to Configure:

1. **Create a Paystack Account**
   - Visit: https://paystack.com
   - Sign up for a free account
   - Verify your email

2. **Get Your API Keys**
   - Log in to Paystack Dashboard: https://dashboard.paystack.com
   - Go to **Settings** → **Developer**
   - Copy your **Public Key** (both test and live keys available)

3. **Add Keys to the Application**
   - **Option A: Edit HTML directly** (Quick Setup)
     - Open `Solomon-Adiele-CV.html`
     - Find line ~1573: `paystackPublicKey: "pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"`
     - Replace with your actual Paystack public key
   - **Option B: Use Console Command** (Runtime Setup)
     - Open browser console (F12)
     - Run: `setPaystackKey("pk_test_YOUR_KEY_HERE")`
     - Key will be set for the current session

### 2. **LocalStorage** (Automatic)

The application uses browser's localStorage for:

- User session data
- CV form data persistence
- User authentication tokens

✅ **No configuration needed** - This is built-in to all modern browsers

### 3. **Browser Compatibility**

Ensure you're using a modern browser with:

- LocalStorage support
- ES6 JavaScript support
- Canvas API (for PDF generation)

Supported browsers:

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📦 External Libraries (Already Included)

The application uses the following CDN libraries:

1. **Paystack Inline** - Payment processing
   - Source: https://js.paystack.co/v1/inline.js

2. **html2canvas** - Convert HTML to canvas for PDF
   - Version: 1.4.1
   - Source: https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js

3. **jsPDF** - Generate PDF documents
   - Version: 2.5.1
   - Source: https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js

## ✅ Verification Checklist

- [ ] Paystack account created
- [ ] API keys obtained from Paystack dashboard
- [ ] Paystack public key added to the application
- [ ] HTML file updated with your Paystack key
- [ ] Application opens without console errors
- [ ] Can navigate between Auth → Dashboard → Form → Preview
- [ ] Can download CV as PDF
- [ ] Can download CV as DOCX
- [ ] Payment/PIN request feature works (requires valid Paystack key)

## 🚀 Running the Application

1. Open `Solomon-Adiele-CV.html` in your web browser
2. Register or login with your email
3. Fill in your CV details
4. Preview your CV
5. Download as PDF or DOCX
6. Request PIN via Paystack for premium features (requires Paystack key configured)

## 🔐 Security Notes

- **Never commit real API keys to version control**
- Always use test keys (`pk_test_*`) during development
- Switch to live keys (`pk_live_*`) only in production
- Keep your Paystack secret key (`sk_*`) secure on your backend
- This application only uses public keys (safe for frontend)

## 📞 Support

- Paystack Support: https://paystack.com/support
- Paystack Documentation: https://paystack.com/docs/api
- Application Issues: Check browser console for errors (F12)

## 📝 Environment Variables Summary

| Variable                   | Type   | Required       | Default     | Purpose               |
| -------------------------- | ------ | -------------- | ----------- | --------------------- |
| `PAYSTACK_PUBLIC_KEY_TEST` | String | Yes            | pk_test_xxx | Testing payments      |
| `PAYSTACK_PUBLIC_KEY_LIVE` | String | For Production | pk_live_xxx | Live payments         |
| `ENVIRONMENT`              | String | Optional       | test        | Environment selection |
