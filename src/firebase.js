import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyB57z39p9GnqwUuUiQFcyzhPMimGvsrnNo",
    authDomain: "react-disney-61207.firebaseapp.com",
    projectId: "react-disney-61207",
    storageBucket: "react-disney-61207.appspot.com",
    messagingSenderId: "1050018918668",
    appId: "1:1050018918668:web:14d53edc7bdf901d125929"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export { auth , provider, storage, firebaseConfig}

export default db