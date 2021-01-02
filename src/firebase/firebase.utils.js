import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDMMXvyTu0APSqw68GgS5LpCdLQTNzi4bQ",
    authDomain: "crwn-db-b0d1b.firebaseapp.com",
    projectId: "crwn-db-b0d1b",
    storageBucket: "crwn-db-b0d1b.appspot.com",
    messagingSenderId: "1048429563765",
    appId: "1:1048429563765:web:f0c5908f453b711c9acd3c",
    measurementId: "G-58FZYV2YKK"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();  

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;