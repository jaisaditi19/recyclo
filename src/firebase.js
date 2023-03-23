// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs1-d4LQYu1XeUcatD4qpiUzVmxHN7tyQ",
  authDomain: "fireapp-5a2cb.firebaseapp.com",
  projectId: "fireapp-5a2cb",
  storageBucket: "fireapp-5a2cb.appspot.com",
  messagingSenderId: "626566014296",
  appId: "1:626566014296:web:2449bc5c7dff176cbb312d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app