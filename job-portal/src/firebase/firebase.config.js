// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgdQdoHtRk0uhyOQBstXrDa6XzpK7grpc",
  authDomain: "job-portal-ca19d.firebaseapp.com",
  projectId: "job-portal-ca19d",
  storageBucket: "job-portal-ca19d.appspot.com",
  messagingSenderId: "539963883210",
  appId: "1:539963883210:web:c15fbfe223e0201a09fe33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;