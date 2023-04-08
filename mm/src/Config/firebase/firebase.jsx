// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = firebase.auth();

// import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAocNSp5KWBKXt3a6fV65ztd6itu85PEFE",
  authDomain: "lmsproject-bc291.firebaseapp.com",
  projectId: "lmsproject-bc291",
  storageBucket: "lmsproject-bc291.appspot.com",
  messagingSenderId: "995213299443",
  appId: "1:995213299443:web:a96caf935d13248604b186",
  measurementId: "G-MFXH9CVBL4"
};

