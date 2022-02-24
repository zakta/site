// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)
const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  assetPrefix: '',
  images: {
    loader: 'akamai',
    path: '/',
  },
};
