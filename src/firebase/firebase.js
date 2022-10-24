import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDR-XbSjf3_UWUfWmdXlr48wCm1NPnLHfQ",
    authDomain: "limpi-ar-73888.firebaseapp.com",
    databaseURL: "https://limpi-ar-73888-default-rtdb.firebaseio.com",
    projectId: "limpi-ar-73888",
    storageBucket: "limpi-ar-73888.appspot.com",
    messagingSenderId: "705420047036",
    appId: "1:705420047036:web:41e6958228a6065d33d6b9",
    measurementId: "G-T6Q319DMFM"
};
export const auth = getAuth(app);
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app) 