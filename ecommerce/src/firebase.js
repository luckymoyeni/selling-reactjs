import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCEmRpPX4Z9Qgljw-8BsHEm-Y455SZk42w",
    authDomain: "ecommerce-b5923.firebaseapp.com",
    databaseURL: "https://ecommerce-b5923.firebaseio.com",
    projectId: "ecommerce-b5923",
    storageBucket: "ecommerce-b5923.appspot.com",
    messagingSenderId: "839211141780",
    appId: "1:839211141780:web:c035f4a03cf28fbc4a4281",
    measurementId: "G-34XKQKRH2P"
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};