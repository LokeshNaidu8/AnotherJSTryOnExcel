// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAHDpL9rHR53imz417GQb-jnT6EwlEXVZs",
    authDomain: "gleansmart.firebaseapp.com",
    databaseURL: "https://gleansmart.firebaseio.com",
    projectId: "gleansmart",
    storageBucket: "gleansmart.appspot.com",
    messagingSenderId: "520429925831",
    appId: "1:520429925831:web:b024c639e53eb2a01695e2",
    measurementId: "G-KF8W9FLDGG"
  };

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(
        m,
        key,
        value
    ) {
        vars[key] = value;
    });
    return vars;
}

let PROJECT_ID = getUrlVars()["projectid"];

console.log(PROJECT_ID);

db.collection("Projects").where("ProjectNo", "==", PROJECT_ID).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});
