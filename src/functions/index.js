const firebaseFunctions = require('firebase-functions');

exports.index = firebaseFunctions.https.onRequest((request, response) => {
  response.set('Cache-Control', `public, max-age=${60 * 60 * 24 * 365}, smaxage=${60 * 60 * 24 * 365}`);
  response.sendFile(`${__dirname}/.next/serverless/pages/index.html`);
});

exports.termOfSevice = firebaseFunctions.https.onRequest((request, response) => {
  response.set('Cache-Control', `public, max-age=${60 * 60 * 24 * 365}, smaxage=${60 * 60 * 24 * 365}`);
  response.sendFile(`${__dirname}/.next/serverless/pages/terms-of-service.html`);
});

exports.privacyPolicy = firebaseFunctions.https.onRequest((request, response) => {
  response.set('Cache-Control', `public, max-age=${60 * 60 * 24 * 365}, smaxage=${60 * 60 * 24 * 365}`);
  response.sendFile(`${__dirname}/.next/serverless/pages/privacy-policy.html`);
});

exports.static = firebaseFunctions.https.onRequest((request, response) => {
  response.set('Cache-Control', `public, max-age=${60 * 60 * 24 * 365}, smaxage=${60 * 60 * 24 * 365}`);
  response.sendFile(`${__dirname}${request.path.replace('_next', '.next')}`);
});

exports.handleNewLead = firebaseFunctions.https.onRequest(async (request, response) => {
  const firebaseAdmin = require('firebase-admin');

  if (!firebaseAdmin.apps[0]) firebaseAdmin.initializeApp(firebaseFunctions.config().firebase);

  const firestore = firebaseAdmin.firestore();

  firestore
    .collection('lists')
    .doc('coming-soon')
    .update({
      contacts: firebaseAdmin.firestore.FieldValue.arrayUnion({
        email: `${Math.random()
          .toString(36)
          .substring(2, 15)}@domain.com`,
        optinDate: Date.now()
      })
    })
    .then(() => {
      response.send(`<h1>New Lead Generated 😁</h1>`);
    })
    .catch(error => console.error(error));

  // const sendgridMail = require('@sendgrid/mail');
  // sendgridMail.setApiKey(`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`);
  // const msg = {
  //   to: 'mehdi.karim@outlook.com',
  //   from: 'mehdi.karim@martechpoint.com',
  //   subject: 'Sending with Twilio SendGrid is Fun',
  //   text: 'and easy to do anywhere, even with Node.js',
  //   html: '<strong>and easy to do anywhere, even with Node.js</strong>'
  // };
  // sendgridMail.send(msg);
});

// Listen for changes in all documents in the 'users' collection
// exports.sendEmail = functions.firestore.document('lists/{listId}').onUpdate((change, context) => {
//   // If we set `/users/marie` to {name: "Marie"} then
//   // context.params.userId == "marie"
//   // ... and ...
//   // change.after.data() == {name: "Marie"}

//   const nodemailer = require('nodemailer');
//     let transporter = nodemailer.createTransport({
//         sendmail: true,
//         newline: 'windows',
//         logger: false
//     });

//     // Message object
//     let message = {
//         from: 'Mehdi from Martech Point<mehdi.karim@martechpoint.com>',

//         // Comma separated list of recipients
//         to: context.params.email.email,
//         bcc: 'mehdi.karim@outlook.com',

//         // Subject of the message
//         subject: '🔴 Nodemailer Test Email ✔',

//         // plaintext body
//         text: 'Hello to myself!',

//         // HTML body
//         html: '<p><b>Hello</b> to myself </p>'
//      };

//     let info = await transporter.sendMail(message);
//     console.log('Message sent successfully as %s', info.messageId);

// });
