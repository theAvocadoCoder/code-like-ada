import { createApp } from "vue";
import "./styles/tailwind.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";


import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

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
const firebaseApp = initializeApp(firebaseConfig, "code-like-ada");



const analytics = getAnalytics(firebaseApp);
const db = getFirestore(firebaseApp);


createApp(App).use(store).use(router).mount("#app");

export {
    analytics,
    db
}
