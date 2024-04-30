import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBpi_nIdLSccOfxDWhFl640zI3fh6U5haI",
    authDomain: "serelepeapp.firebaseapp.com",
    projectId: "serelepeapp",
    storageBucket: "serelepeapp.appspot.com",
    messagingSenderId: "579757522682",
    appId: "1:579757522682:web:e96a4ccbcb53ddb0939343",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
export default getFirestore();
