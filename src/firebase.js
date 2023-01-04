// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCknuB2kRZth7jZmOiFrggtw74kbe5jS08",
  authDomain: "js-podcast-8137b.firebaseapp.com",
  projectId: "js-podcast-8137b",
  storageBucket: "js-podcast-8137b.appspot.com",
  messagingSenderId: "334268432331",
  appId: "1:334268432331:web:b9dc65915eacfbf923404e",
  measurementId: "G-YXQGNY1JL7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);