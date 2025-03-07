import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
import {getAuth} from 'firebase/auth'
import { getDatabase } from "firebase/database";
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
export const database = getDatabase(app)
const messaging = getMessaging(app);

// Request permission to show notifications
export const requestNotificationPermission = async () => {
  try {
    const token = await getToken(messaging, {
      vapidKey: "your-vapid-key", // Obtain from Firebase Cloud Messaging settings
    });
    if (token) {
      // console.log("Notification permission granted.");
      // console.log("FCM Token:", token);
      return token;
    } else {
      // console.log("No registration token available. Request permission to generate one.");
    }
  } catch (error) {
    // console.error("Error getting notification permission:", error);
  }
};

// Listen for messages when app is in foreground
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });

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