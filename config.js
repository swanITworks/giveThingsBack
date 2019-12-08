import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCeJH7XJbSrpjHM1wOH7TqIw9m9R39hjgk",
    authDomain: "giveyourstuffaway-3f2f9.firebaseapp.com",
    databaseURL: "https://giveyourstuffaway-3f2f9.firebaseio.com",
    projectId: "giveyourstuffaway-3f2f9",
    storageBucket: "giveyourstuffaway-3f2f9.appspot.com",
    messagingSenderId: "874704060579",
    appId: "1:874704060579:web:368c2d5f8fac6b0559ff16"
};

export default firebase.initializeApp(firebaseConfig)