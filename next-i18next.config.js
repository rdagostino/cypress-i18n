// Configuration file for i18n.

/**
 * Returns host / domain name.
 *
 * @returns {string}
 */
function getDomain() {
  // Get current site's URL.
  const url = new URL(process.env.NEXT_PUBLIC_SERVER_URL);
  // Remove port number from URL in case of local instance.
  url.port = '';
  // Remove trailing slash and transfer protocol from URL.
  return url
    .toString()
    .replace(/^https?:\/\//, '')
    .replace(/\/$/, '');
}

module.exports = {
  i18n: {
    defaultLocale: 'en-US', // Default language
    locales: ['en-US', 'en-GB'], // Support for English-US & English-UK
    localeDetection: false, // Do not auto redirect user based on Language preference / region.
    // NEXT-JS doesn't allow multiple domains to have same defaultLocale.
    domains: [
      {
        domain: getDomain(),
        defaultLocale: process.env.DEFAULT_LOCALE,
        http: process.env.NODE_ENV === 'development', // If application is in dev mode, set http to true
      },
    ],
  },
};
