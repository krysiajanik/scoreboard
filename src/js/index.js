import '../scss/main.scss';

import {registerSW} from './pwa.js';
registerSW();

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyBT3NVs3JliyXgrV2ZP9ef9z3W9Hip2JVc',
  authDomain: 'scoreboard-072020.firebaseapp.com',
  projectId: 'scoreboard-072020'
});

var db = firebase.firestore();