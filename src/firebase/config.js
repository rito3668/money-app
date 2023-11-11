import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyDxrAMQ1ltZE44knL3UT7kjpAwEgoeFpFU",
    authDomain: "mymoney-3e6b8.firebaseapp.com",
    projectId: "mymoney-3e6b8",
    storageBucket: "mymoney-3e6b8.appspot.com",
    messagingSenderId: "968944297376",
    appId: "1:968944297376:web:8de5c42d3abb42c25c30c5"
  };
//init app
firebase.initializeApp(firebaseConfig)
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
export {projectFirestore}