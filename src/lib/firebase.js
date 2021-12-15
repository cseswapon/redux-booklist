import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4WBLZfxJ2iNlkvMXhjX103vv23Cf_4vU",
  authDomain: "redux-book-rb.firebaseapp.com",
  projectId: "redux-book-rb",
  storageBucket: "redux-book-rb.appspot.com",
  messagingSenderId: "666168996474",
  appId: "1:666168996474:web:ca7e1093edfaa71a9a41c3",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
