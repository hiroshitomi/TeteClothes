import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDGxNkgQjwD4eBXI13sAq2XJvOyIr5tmFA",
  authDomain: "teteclothes-7ddbd.firebaseapp.com",
  projectId: "teteclothes-7ddbd",
  storageBucket: "teteclothes-7ddbd.appspot.com",
  messagingSenderId: "773264898341",
  appId: "1:773264898341:web:20c513de67fee4a94fc2cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

