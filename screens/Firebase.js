import * as firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC74yEDFvqQen88ss-k_kxW6YZn8FDxF28",
  authDomain: "event-date.firebase.com",
  databaseURL: "https://event-date.firebaseio.com",
  storageBucket: "event-date.appspot.com"
};

export default firebase.initializeApp(firebaseConfig);
