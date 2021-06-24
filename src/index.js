import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

  firebase.initializeApp({
    apiKey: "AIzaSyDt_jJ0DKstcC_ivS627rBSJq_MiEx7mnw",
    authDomain: "real-time-chat-5e729.firebaseapp.com",
    projectId: "real-time-chat-5e729",
    storageBucket: "real-time-chat-5e729.appspot.com",
    messagingSenderId: "886662237048",
    appId: "1:886662237048:web:53cc26351caea0da4fd68d",
    measurementId: "G-JHH6SJ377S"
  });
  // firebase.analytics();

  export const Context = createContext(null);

  const auth = firebase.auth();
  const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore
  }}>

  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Context.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
