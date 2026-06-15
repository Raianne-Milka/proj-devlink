
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyA1M4Qwstt4syApTTNbe-u2Y8-VzXfWrx8",
  authDomain: "reactlinks-cd68e.firebaseapp.com",
  projectId: "reactlinks-cd68e",
  storageBucket: "reactlinks-cd68e.firebasestorage.app",
  messagingSenderId: "763393716280",
  appId: "1:763393716280:web:ae4438c6512a42611f76cd"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth};