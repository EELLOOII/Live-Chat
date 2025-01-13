import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCyeQ1bgvw7SVD-BbmdFsm6M9d5hRGz5JY",
    authDomain: "vue-firebase-ea3fc.firebaseapp.com",
    projectId: "vue-firebase-ea3fc",
    storageBucket: "vue-firebase-ea3fc.firebasestorage.app",
    messagingSenderId: "567690787885",
    appId: "1:567690787885:web:4796e5c2b0f9edda864ca4"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Initialize Firestote service
const projectFirestore = firebase.firestore()

// Initialize Firestote auth
const projectAuth = firebase.auth()

//Special firebase datatype
const timestamp = firebase.firestore.FieldValue.serverTimestamp


export { projectAuth, projectFirestore, timestamp }