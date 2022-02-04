// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAouo67ReRkj1ZxpWepPQ5L007Dl4GF3w",
  authDomain: "myapp-d14fb.firebaseapp.com",
  projectId: "myapp-d14fb",
  storageBucket: "myapp-d14fb.appspot.com",
  messagingSenderId: "72410917281",
  appId: "1:72410917281:web:4c597b09d9e99f15a203e0",
  measurementId: "G-BMJB07MR9Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);