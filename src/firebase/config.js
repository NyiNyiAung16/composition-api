import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCW_cWOJ1tXV7nsLUpbcbeiYHuLbMh7_Kc",
    authDomain: "vue-blog22.firebaseapp.com",
    projectId: "vue-blog22",
    storageBucket: "vue-blog22.appspot.com",
    messagingSenderId: "1004556447637",
    appId: "1:1004556447637:web:41bbd9a821709573b0d09c"
  };

firebase.initializeApp(firebaseConfig);
let db=firebase.firestore();
let timestamp=firebase.firestore.FieldValue.serverTimestamp

export {db,timestamp};