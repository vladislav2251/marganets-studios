
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDlJuiY382hHY4O-7mUJ0LhtaJdqT2dxEs",
  authDomain: "marganets-studios.firebaseapp.com",
  projectId: "marganets-studios",
  storageBucket: "marganets-studios.appspot.com",
  messagingSenderId: "812304648184",
  appId: "1:812304648184:web:c7f6790c2cac1f6738b80d",
  measurementId: "G-71SNRN806L"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.getApp();