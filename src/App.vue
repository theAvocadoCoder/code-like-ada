<template>
  <div id="nav">
    <router-view />
  </div>
</template>

<style>
@font-face {
  font-family: "Skyhook Mono";
  src: local("Skyhook Mono"),
    url(./fonts/skyhook-mono/Skyhook-Mono.ttf) format("truetype");
}
</style>

<script>
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

export default {
  firebaseApp,
};
</script>