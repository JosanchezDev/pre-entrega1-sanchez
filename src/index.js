import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppContext } from './components/context/context';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwWPZk49VPJswF_5xvdG-s-kEGBXxOFJY",
  authDomain: "coderhouse-43190-fdec8.firebaseapp.com",
  projectId: "coderhouse-43190-fdec8",
  storageBucket: "coderhouse-43190-fdec8.appspot.com",
  messagingSenderId: "845592841448",
  appId: "1:845592841448:web:15b034d2b914cac0ba4d5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AppContext> */}
    <App />
    {/* </AppContext> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
