const onRequest = require('firebase-functions').https.onRequest;

// const next = require('next');
// const path = require('path');
// const process = require('process');

// const dev = process.env.NODE_ENV !== 'production';

// const app = next({
//   dev: dev,
//   conf: {
//     distDir: `${path.relative(process.cwd(), __dirname)}/.next`
//   }
// });

// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   handle(request, response);
// });

exports.index = onRequest((request, response) => {
  response.set(
    'Cache-Control',
    `public, max-age=${60 * 60 * 24 * 365}, smaxage=${60 * 60 * 24 * 365}`
  );
  response.sendFile(`${__dirname}/.next/serverless/pages/index.html`);
});
exports.termOfSevice = onRequest((request, response) => {
  response.set(
    'Cache-Control',
    `public, max-age=${60 * 60 * 24 * 365}, smaxage=${60 * 60 * 24 * 365}`
  );
  response.sendFile(`${__dirname}/.next/serverless/pages/terms-of-service.html`);
});
exports.privacyPolicy = onRequest((request, response) => {
  response.set(
    'Cache-Control',
    `public, max-age=${60 * 60 * 24 * 365}, smaxage=${60 * 60 * 24 * 365}`
  );
  response.sendFile(`${__dirname}/.next/serverless/pages/privacy-policy.html`);
});

exports.static = onRequest((request, response) => {
  response.set(
    'Cache-Control',
    `public, max-age=${60 * 60 * 24 * 365}, smaxage=${60 * 60 * 24 * 365}`
  );
  response.sendFile(`${__dirname}${request.path.replace('_next', '.next')}`);
});
