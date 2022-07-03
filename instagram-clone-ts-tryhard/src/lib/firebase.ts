//import { seedDatabase } from '../seed';
import Firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyAl6nr0j_YYt1yzhX8p1FiUYCS2e-svJqc",
    authDomain: "instagram-tikka.firebaseapp.com",
    projectId: "instagram-tikka",
    storageBucket: "instagram-tikka.appspot.com",
    messagingSenderId: "1073544887701",
    appId: "1:1073544887701:web:2bc93899a4da78e0ac4a9c"
  };
  
  export const firebase = Firebase.initializeApp(config);
  export const firestore = firebase.firestore();
  
  //seedDatabase(firebase);
