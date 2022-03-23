import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set, onValue } from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCKUd_d9-gLl8IG-VfhL4YJlapmt9_DaiU",
    authDomain: "nave-70ad0.firebaseapp.com",
    databaseURL: "https://nave-70ad0-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "nave-70ad0",
    storageBucket: "nave-70ad0.appspot.com",
    messagingSenderId: "771617596392",
    appId: "1:771617596392:web:20dd5e5365ac6ed8bd7a5d",
    measurementId: "G-3CPCQCNK9H"
  };

  
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  export {
      app,
      db
  }