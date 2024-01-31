

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQZuOadRlvLy6pfhOp9qAvb5Pt69uRE_U",
  authDomain: "ecommerce-f4dfe.firebaseapp.com",
  projectId: "ecommerce-f4dfe",
  storageBucket: "ecommerce-f4dfe.appspot.com",
  messagingSenderId: "348801475463",
  appId: "1:348801475463:web:e0cfcf929efe9028682922"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
 
export default app

const  databse = getFirestore();
 export {databse}
