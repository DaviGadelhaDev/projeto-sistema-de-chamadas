
import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBWs9SowvPFM4_sX8zxdMK8X4gXB-1ODEk",
    authDomain: "tickets-37c31.firebaseapp.com",
    projectId: "tickets-37c31",
    storageBucket: "tickets-37c31.appspot.com",
    messagingSenderId: "239314402432",
    appId: "1:239314402432:web:115ce4cba3dcf83a1a7a65",
    measurementId: "G-TX5TPBE7E2"
  };

  const firebaseApp = initializeApp(firebaseConfig)

  const auth = getAuth(firebaseApp)
  const db = getFirestore(firebaseApp)
  const storage = getStorage(firebaseApp)

  export {auth, db, storage}