import { initializeApp } from "firebase/app"; 
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyDlIxT69_wxvuPwnlqBfvl97yzH8qF7P6o",
  authDomain: "app-animais-ad729.firebaseapp.com",
  projectId: "app-animais-ad729",
  storageBucket: "app-animais-ad729.appspot.com",
  messagingSenderId: "61250339684",
  appId: "1:61250339684:web:a983802afa4600fa03f071"
}; 

const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app); 
export const db = getFirestore(app);