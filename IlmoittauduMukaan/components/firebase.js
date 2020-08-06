import * as firebase from "firebase";

// initializing firebase object by giving database and project reference
var firebaseConfig = {
  apiKey: "AIzaSyCy0jOZNmumYyMSLqfPraSQ3Fr3UMiOf-U",
  authDomain: "ilmoittaudumukaan-9018d.firebaseapp.com",
  databaseURL: "https://ilmoittaudumukaan-9018d.firebaseio.com",
  projectId: "ilmoittaudumukaan-9018d",
  storageBucket: "ilmoittaudumukaan-9018d.appspot.com",
  messagingSenderId: "633964721389",
  appId: "1:633964721389:web:985cadfa875c62411ec8e4",
  measurementId: "G-M8V7BH36KK",
};

firebase.initializeApp(firebaseConfig);

export default !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();
