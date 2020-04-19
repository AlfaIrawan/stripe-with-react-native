/* eslint-disable prettier/prettier */
const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const stripe = require('stripe')('sk_test_KZ8XWMpvxULiKH47Yk5SfbZM00i0Sjo9bJ');

exports.completePaymentWithStripe = functions.https.onRequest((request,response) => {
    stripe.charges.create({
        amount:request.body.amount,
        currency:request.body.currency,
        source:'tok_mastercard',
        // eslint-disable-next-line promise/always-return
    }).then(charge => {
        response.send(charge);
    }).catch(error => {
        console.log(error);
    });
},);

exports.helloWorld = functions.https.onRequest((req, res) => {
    res.status(200).send('Hello, World!');
});
