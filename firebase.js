// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZdahvxjsyJrzl25IJdrz2Ot9AdIvSy24",
    authDomain: "click-truck-service-19505.firebaseapp.com",
    databaseURL: "https://click-truck-service-19505-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "click-truck-service-19505",
    storageBucket: "click-truck-service-19505.appspot.com",
    messagingSenderId: "783034529610",
    appId: "1:783034529610:web:1d9074a795fa73e229f3b3",
    measurementId: "G-K9WKF6CK5J"
  };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth()

export { auth };