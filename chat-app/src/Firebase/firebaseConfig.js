import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC1fa8laTWqGzrDDKR0MkhCMSlvWTrL9MY",
  authDomain: "woop-chat.firebaseapp.com",
  databaseURL: "https://woop-chat.firebaseio.com",
  projectId: "woop-chat",
  storageBucket: "woop-chat.appspot.com",
  messagingSenderId: "546976343132",
  appId: "1:546976343132:web:bbbb0f67016f1a2d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
