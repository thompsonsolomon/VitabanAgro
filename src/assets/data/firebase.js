import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCAd78Zp83Y8OG7C4tLGFStoS0YZ_JzO5M",
  authDomain: "vitabanagrow.firebaseapp.com",
  projectId: "vitabanagrow",
  storageBucket: "vitabanagrow.appspot.com",
  messagingSenderId: "454916884678",
  appId: "1:454916884678:web:312afc0eae321d6d11afc7",
  measurementId: "G-R4PCMK269C"
};
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const storage = getStorage(app);
export const auth =  getAuth(app);


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCAd78Zp83Y8OG7C4tLGFStoS0YZ_JzO5M",
//   authDomain: "vitabanagrow.firebaseapp.com",
//   projectId: "vitabanagrow",
//   storageBucket: "vitabanagrow.appspot.com",
//   messagingSenderId: "454916884678",
//   appId: "1:454916884678:web:312afc0eae321d6d11afc7",
//   measurementId: "G-R4PCMK269C"
// };