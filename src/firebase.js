import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDu7j7BMWrFyDTcQRxHParzpmCW94VmIKI",
  authDomain: "a-clone-6a8a3.firebaseapp.com",
  projectId: "a-clone-6a8a3",
  storageBucket: "a-clone-6a8a3.appspot.com",
  messagingSenderId: "358134998032",
  appId: "1:358134998032:web:5905d221103b7514ea5695",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

