"use client";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-qaY3Vr5M8qqPfzsdK8xkX1jC5PTNggE",
  authDomain: "piwwo-a7e36.firebaseapp.com",
  projectId: "piwwo-a7e36",
  storageBucket: "piwwo-a7e36.firebasestorage.app",
  messagingSenderId: "543668179634",
  appId: "1:543668179634:web:552247a8f5a25610d16fab"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
