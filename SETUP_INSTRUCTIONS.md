# CV Generator - Quick Setup Guide

## ⚡ 5-Minute Setup

### Step 1: Get Paystack Key (2 minutes)

1. Go to https://paystack.com
2. Sign up (free account)
3. Go to https://dashboard.paystack.com
4. Click **Settings** → **Developer**
5. Copy your **Public Key** (starts with `pk_test_` or `pk_live_`)

### Step 2: Configure the Application (3 minutes)

**Method 1: Direct HTML Edit (Recommended)**

1. Open `index.html` in a text editor
2. Find this line (around line 1573):
   ```javascript
   paystackPublicKey: "pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   ```
3. Replace `pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx` with your actual key
4. Save the file

**Method 2: Runtime Configuration**

1. Open `index.html` in your browser
2. Open Developer Console (Press F12)
3. Paste this command:
   ```javascript
   setPaystackKey("pk_test_YOUR_KEY_HERE");
   ```
4. Press Enter (Replace with your actual key)

### Step 3: Test the Application ✅

1. Open `index.html` in your browser
2. You should see:
   - Login/Register screen
   - Dashboard after login
   - Form to create CV
   - Preview and download options
3. All features should work without errors

## 🎯 What Each Feature Requires

| Feature                | Requires                  | Status              |
| ---------------------- | ------------------------- | ------------------- |
| Create Account         | Browser localStorage      | ✅ Ready            |
| Login/Logout           | Browser localStorage      | ✅ Ready            |
| Fill CV Form           | Browser localStorage      | ✅ Ready            |
| Preview CV             | Browser storage           | ✅ Ready            |
| Download PDF           | html2canvas + jsPDF (CDN) | ✅ Ready            |
| Download DOCX          | No dependencies           | ✅ Ready            |
| Request PIN (Paystack) | Paystack public key       | ⚙️ **NEEDS CONFIG** |

## ✅ Verification

Open browser console (F12) and check:

- ✅ No red errors
- ✅ "📄 CV Generator loaded. Welcome!" message appears
- ✅ "🔑 To set your Paystack public key..." message shows

If you see errors, your Paystack key might not be configured correctly.

## 📦 What's Already Configured

You **don't need to install** anything else:

- ✅ All CSS is inline (no separate stylesheet needed)
- ✅ All JavaScript is inline (no separate files needed)
- ✅ All external libraries load from CDN
- ✅ LocalStorage is built-in to browsers
- ✅ PDF generation uses CDN libraries
- ✅ No backend server required

## 🚀 Ready to Use!

Your CV Generator is now ready. Just:

1. Open `index.html` in any browser
2. Sign up or log in
3. Start creating your professional CV!

## ❓ Troubleshooting

### "Payment feature not working"

→ Check if Paystack key is set correctly (open console, run `setPaystackKey("your_key")`)

### "Can't download PDF"

→ Try a different browser or clear browser cache

### "Data not saving"

→ Check if browser allows localStorage (not in private mode)

### "Pages loading slowly"

→ Check your internet connection (CDN libraries need to load)

## 📞 Need Help?

1. Check the browser console for error messages (F12)
2. Verify your Paystack key is correct
3. Try the application in a different browser
4. Clear browser cache and reload
