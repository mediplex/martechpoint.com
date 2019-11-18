const firebaseFunctions = require('firebase-functions');

exports.error = firebaseFunctions.https.onRequest((request, response) => {
  const errorPage = require(`${__dirname}/lambdas/_error`);
  errorPage.render(request, response);
});

exports.handleNewLead = firebaseFunctions.https.onRequest(async (request, response) => {
  // console.log(request.query);
  // console.log(request.query.data);
  // console.log(request.query.listId);
  // console.log(request.query.lead);
  // console.log(request.query.templateId);

  const { listId, lead, templateId } = request.body;

  const firebaseAdmin = require('firebase-admin');

  if (!firebaseAdmin.apps[0]) firebaseAdmin.initializeApp(firebaseFunctions.config().firebase);

  const firestore = firebaseAdmin.firestore();

  // check if listId and lead lead
  const emailBody = await firestore
    .collection('lists')
    .doc(listId)
    .update({
      contacts: firebaseAdmin.firestore.FieldValue.arrayUnion({
        ...lead
      })
    })
    .then(async () => {
      const handlebars = require('handlebars');
      // check if (!templateId)
      const template = await firestore
        .collection('lists')
        .doc(listId)
        .get()
        .then(doc => {
          if (doc.exists) {
            const list = doc.data();

            const template = list.templates.find(template => template.id == templateId);
            // console.log(list.templates[0]);
            // check if template exists
            return template.body;
          } else {
            console.error(`error catched: lists/${listId} doc not found`);
          }
        })
        .catch(err => {
          console.log('Error getting document', err);
        });

      if (template) {
        // should come form the database
        const template = `<h1>email to be send to: {{email}}</h1>`;
        const compiledTempate = handlebars.compile(template);
        const data = request.body.lead;
        const emailBody = compiledTempate(data);

        return emailBody;
      }
    })
    .catch(error => console.error(error));

  // const sendgridMail = require('@sendgrid/mail');
  // sendgridMail.setApiKey(`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`);
  // const msg = {
  //   to: lead.email,
  //   from: 'mehdi.karim@martechpoint.com', // from appConfig
  //   subject: 'Sending with Twilio SendGrid is Fun', // from List
  //   // text: 'and easy to do anywhere, even with Node.js',
  //   html: emailBody // from List
  // };
  // sendgridMail.send(msg);

  response.send({ success: true }); // to be recrified
});
