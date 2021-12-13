// init Firebase
// const firebase = require('firebase/app');
// var admin = require('firebase-admin');
// const firebaseConfig = require('../../config/firebase-DaBro.json');

// let app;
// if (firebase.getApps().length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.getApp();
// }

// Initialize the app with a service account, granting admin privileges
// admin.initializeApp({
//   credential: admin.credential.cert(firebaseConfig),
//   // databaseURL: 'https://dabro-6d3b3-default-rtdb.europe-west1.firebasedatabase.app',
//   // databaseURL: 'https://dabro-6d3b3.firebaseio.com',
// });

var admin = require('firebase-admin');

var serviceAccount = require('../../config/firebase-DaBro.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://dabro-6d3b3-default-rtdb.europe-west1.firebasedatabase.app',
});

module.exports = { firebaseAdmin: admin, firestore: admin.firestore() };
