import { initializeApp } from 'firebase/app'

export default defineNuxtPlugin((nuxtApp) => {
    const firebaseConfig = {
        apiKey: "AIzaSyCBUotaFr-UmowBvUPQdc9eH6FdkWRfIZ4",
        authDomain: "asobeba-e30a2.firebaseapp.com",
        projectId: "asobeba-e30a2",
        storageBucket: "asobeba-e30a2.appspot.com",
        messagingSenderId: "810876618652",
        appId: "1:810876618652:web:fe6d1b2216db6eb2c2aa59",
        measurementId: "G-GRHBTLXN7D"
    };
    // const firebaseConfig = {
    //     apiKey: config.FIREBASE_API_KEY,
    //     authDomain: config.FIREBASE_AUTH_DOMAIN,
    //     projectId: config.FIREBASE_PROJECT_ID,
    // };

    initializeApp(firebaseConfig);
})
