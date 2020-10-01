import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBoO4HEKhOWJb3iX6TAVF89UxE3ufbNX1w",
  authDomain: "clone-a5a50.firebaseapp.com",
  databaseURL: "https://clone-a5a50.firebaseio.com",
  projectId: "clone-a5a50",
  storageBucket: "clone-a5a50.appspot.com",
  messagingSenderId: "281672600696",
  appId: "1:281672600696:web:147317a379516c3485318d",
  measurementId: "G-452FG1Z4S6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };