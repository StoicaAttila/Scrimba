import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FirebaseContext } from './context/firebase';
import { firebase, firestore } from './lib/firebase';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <FirebaseContext.Provider value={{firebase, firestore}}>
    <App />
  </FirebaseContext.Provider>
);

