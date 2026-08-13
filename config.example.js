// ─────────────────────────────────────────────────────────────
// CV Generator Configuration
// ─────────────────────────────────────────────────────────────
//
// INSTRUCTIONS:
// 1. Copy this file and rename to config.js
// 2. Update the values below with your actual API keys
// 3. Add config.js to .gitignore (already done)
// 4. The HTML file will automatically load this config if present
//
// DO NOT commit config.js to GitHub!
// ─────────────────────────────────────────────────────────────

const CONFIG = {
  // Paystack Public Key - Get from https://dashboard.paystack.com/settings/developer
  PAYSTACK_PUBLIC_KEY: "pk_live_d1eda80050f4e630b988f9e8cce90775af0c5d7f",

  // Environment type: 'development' | 'production'
  ENVIRONMENT: "production",

  // Enable debug logging
  DEBUG: false,
};

// Export for browser environments
if (typeof window !== "undefined") {
  window.CONFIG = CONFIG;
}

// Export for Node.js/CommonJS (if used in build process)
if (typeof module !== "undefined" && module.exports) {
  module.exports = CONFIG;
}
