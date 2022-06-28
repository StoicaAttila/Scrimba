//import { seedDatabase } from "../seed";
import * as firebaseImport from "firebase";

const config: {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
  } = {
    apiKey: "AIzaSyAl6nr0j_YYt1yzhX8p1FiUYCS2e-svJqc",
    authDomain: "instagram-tikka.firebaseapp.com",
    projectId: "instagram-tikka",
    storageBucket: "instagram-tikka.appspot.com",
    messagingSenderId: "1073544887701",
    appId: "1:1073544887701:web:2bc93899a4da78e0ac4a9c"
  };

const firebase = firebaseImport.initializeApp(config);
const FieldValue  = firebase.firestore;

//seedDatabase(firebase);

export { firebase, FieldValue };