// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAspOk6jOoA40zQEJGg8rR_Inh39CD8xA8",
  authDomain: "quiz-rinri.firebaseapp.com",
  projectId: "quiz-rinri",
  storageBucket: "quiz-rinri.appspot.com",
  messagingSenderId: "910657883149",
  appId: "1:910657883149:web:fc20b82f2c35c3b88a9944",
  measurementId: "G-5BG0YLRX9L"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);