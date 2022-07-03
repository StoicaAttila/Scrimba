//import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyAl6nr0j_YYt1yzhX8p1FiUYCS2e-svJqc",
  authDomain: "instagram-tikka.firebaseapp.com",
  projectId: "instagram-tikka",
  storageBucket: "instagram-tikka.appspot.com",
  messagingSenderId: "1073544887701",
  appId: "1:1073544887701:web:2bc93899a4da78e0ac4a9c"
};

const firebase = window.firebase.initializeApp(config);
const { FieldValue } = window.firebase.firestore;

//seedDatabase(firebase);

export { firebase, FieldValue };