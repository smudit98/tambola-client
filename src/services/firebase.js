import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAaCn1ZZc5s37e0B5ieMb2Xknu001q6qZ4",
    authDomain: "tambola-webapp.firebaseapp.com",
    databaseURL: "https://tambola-webapp.firebaseio.com",
    projectId: "tambola-webapp",
    storageBucket: "tambola-webapp.appspot.com",
    messagingSenderId: "96437396181",
    appId: "1:96437396181:web:1a607f17a78d90e04f385c",
    measurementId: "G-FQ0LE41C5E"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;