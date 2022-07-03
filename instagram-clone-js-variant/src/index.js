import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { firebase, FieldValue } from './lib/firebase';
import FirebaseContext from './context/firebase';

const root = document.querySelector("#root")

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>,
  root
);