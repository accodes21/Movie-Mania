// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// import { getAnalytics } from "firebase/analytics";
import "firebase/compat/auth"


const app = firebase.initializeApp({
    apiKey: "AIzaSyCV3KJen6IbMZuhC28SdvpKU_TXGahi1wA",
    authDomain: "movieop-1db9a.firebaseapp.com",
    projectId: "movieop-1db9a",
    storageBucket: "movieop-1db9a.appspot.com",
    messagingSenderId: "776520545464",
    appId: "1:776520545464:web:4c2f4e6d2811300065f04d",
    measurementId: "G-B4QMMP90V4"
  });

// Initialize Firebase
export const auth = app.auth();
//const analytics = getAnalytics(app);