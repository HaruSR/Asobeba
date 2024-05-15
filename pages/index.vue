<script lang="ts" setup>
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBUotaFr-UmowBvUPQdc9eH6FdkWRfIZ4",
  authDomain: "asobeba-e30a2.firebaseapp.com",
  projectId: "asobeba-e30a2",
  storageBucket: "asobeba-e30a2.appspot.com",
  messagingSenderId: "810876618652",
  appId: "1:810876618652:web:fe6d1b2216db6eb2c2aa59",
  measurementId: "G-GRHBTLXN7D"
};

const login =()=> console.log(initializeApp(firebaseConfig));
// Initialize Firebase
if(window){
  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
}


</script>

<template>
  <div>
    Page: index
    <button @click="(login)"></button>
  </div>
</template>

<style scoped></style>
