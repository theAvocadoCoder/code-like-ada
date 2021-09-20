// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEi5v_MsGJ1UZzCRvGlEwtDUzM9anFulI",
  authDomain: "code-like-ada.firebaseapp.com",
  projectId: "code-like-ada",
  storageBucket: "code-like-ada.appspot.com",
  messagingSenderId: "981332319481",
  appId: "1:981332319481:web:b361d7c3bdb2a24acf1628",
  measurementId: "G-Z4WLK77V7V",
};

// Initialize Firebase
const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
const applicantsCollection = db.collection("applicants");
const db = getFirestore(app);


export {
    analytics,
    app,
    applicantsCollection,
    db,
}
