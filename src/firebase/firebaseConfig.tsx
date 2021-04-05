import firebase from "firebase/app";
import 'firebase/firestore';


const APIKEY = process.env.REACT_APP_APIKEY

const firebaseConfig =
    {
        apiKey: APIKEY,
        authDomain: "ethanandjackie-f71f0.firebaseapp.com",
        databaseURL: "https://ethanandjackie-f71f0.firebaseio.com",
        projectId: "ethanandjackie-f71f0",
        storageBucket: "ethanandjackie-f71f0.appspot.com",
        messagingSenderId: "1043723762440",
        appId: "1:1043723762440:web:3cfbed3365f7e81f314abd",
        measurementId: "G-9T57HYZLT7"
    };

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

// firebase.firestore().enablePersistence()

export {firebase, db}