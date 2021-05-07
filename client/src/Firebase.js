import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDnBQNnyushQoXvnk429MZANgxeHZyg4tg",
    authDomain: "logistics-app-8c658.firebaseapp.com",
    databaseURL: "https://logistics-app-8c658-default-rtdb.firebaseio.com",
    projectId: "logistics-app-8c658",
    storageBucket: "logistics-app-8c658.appspot.com",
    messagingSenderId: "386386331780",
    appId: "1:386386331780:web:c72685ae8f0a80c578dad1",
    measurementId: "G-S67PPZH9NB"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
