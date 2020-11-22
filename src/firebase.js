import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm6Hca3fasCxj-33SLfq4j-saMO5Nbif8",
  authDomain: "whatsapp-clone-7c6a1.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-7c6a1.firebaseio.com",
  projectId: "whatsapp-clone-7c6a1",
  storageBucket: "whatsapp-clone-7c6a1.appspot.com",
  messagingSenderId: "795836603527",
  appId: "1:795836603527:web:00b6b1638358ff0294ac22",
  measurementId: "G-E00R9SYL7X",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
