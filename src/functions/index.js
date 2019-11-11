const onRequest = require('firebase-functions').https.onRequest;

exports.index = onRequest((request, response) => {
  response.set('Cache-Control', `public, max-age=${60 * 60 * 24 * 365}, smaxage=${60 * 60 * 24 * 365}`);
  response.sendFile(`${__dirname}/.next/serverless/pages/index.html`);
});

exports.termOfSevice = onRequest((request, response) => {
  response.set('Cache-Control', `public, max-age=${60 * 60 * 24 * 365}, smaxage=${60 * 60 * 24 * 365}`);
  response.sendFile(`${__dirname}/.next/serverless/pages/terms-of-service.html`);
});

exports.privacyPolicy = onRequest((request, response) => {
  response.set('Cache-Control', `public, max-age=${60 * 60 * 24 * 365}, smaxage=${60 * 60 * 24 * 365}`);
  response.sendFile(`${__dirname}/.next/serverless/pages/privacy-policy.html`);
});

exports.static = onRequest((request, response) => {
  response.set('Cache-Control', `public, max-age=${60 * 60 * 24 * 365}, smaxage=${60 * 60 * 24 * 365}`);
  response.sendFile(`${__dirname}${request.path.replace('_next', '.next')}`);
});