// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBVzvg6Sa1gFrxeXqaa-FxIaRbJVWtR5mI",
  authDomain: "fir-auth-123-2b331.firebaseapp.com",
  projectId: "fir-auth-123-2b331",
  storageBucket: "fir-auth-123-2b331.appspot.com",
  messagingSenderId: "5010752591",
  appId: "1:5010752591:web:a7b9f67ebf02b60e45563a",
  measurementId: "G-VFTT06Z3XZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth();

export {app, auth};