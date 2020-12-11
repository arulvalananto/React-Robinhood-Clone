import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDko-TU5wb4piFDPQ2d_LmgTo8r4dYRzio134",
  authDomain: "robinhood-copy.firebaseapp.com",
  projectId: "robinhood-copy",
  storageBucket: "robinhood-copy.appspot.com",
  messagingSenderId: "812814135087",
  appId: "1:812814135087:web:4f12d61b1197f24d7fbbda",
  measurementId: "G-4GVE81LHDT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth, db };
