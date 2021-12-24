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

let array = ["QUANTO0001", "QUANTO0003"];

db.collection("Projects").where("ProjectNo", "==", PROJECT_ID).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        db.collection("Projects").doc(doc.id).collection("Reports").where("C_STATUS", "==", 10).get().then((querySnapshot) => {
            querySnapshot.forEach((reportsDoc) => {
                for (let index = 0; index < array.length; index++) {
                    let clientID = array[index];
                    let PID = reportsDoc.data().PID;
                    console.log(PID)
                    // if(reportsDoc.id == clientID){
                    //     db.collection("Projects").doc(doc.id).collection("Reports").doc(PID).set({
                    //         Status: "Approved",
                    //     })
                    //     .then((docRef) => {
                            
                    //     })
                    //     .catch((error) => {
                    //         console.error("Error adding document: ", error);
                    //     });
                        
                    // } else {
                    //     db.collection("Projects").doc(doc.id).collection("Reports").doc(PID).set({
                    //         Status: "Rejected",
                    //     })
                    //     .then((docRef) => {
                            
                    //     })
                    //     .catch((error) => {
                    //         console.error("Error adding document: ", error);
                    //     });
                    // }
                    
                }
            });
    });
    })});
