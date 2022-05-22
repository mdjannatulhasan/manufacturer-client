// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDS3UzSCtX3FIoTSVHy9fSxVZc_TjpAhI4",
    authDomain: "hasan-manufacturing-industry.firebaseapp.com",
    projectId: "hasan-manufacturing-industry",
    storageBucket: "hasan-manufacturing-industry.appspot.com",
    messagingSenderId: "168685354770",
    appId: "1:168685354770:web:c8a74ed51f20c42ce0bdcb",
    measurementId: "G-WWMCCQHDWF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
