//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCC9C_zfI3ko5M7CxnaVAnNPKtYDa2Rssw",
    authDomain: "kwitter-83caf.firebaseapp.com",
    projectId: "kwitter-83caf",
    storageBucket: "kwitter-83caf.appspot.com",
    messagingSenderId: "289545903114",
    appId: "1:289545903114:web:744a1d8ba262a74b5a13f3",
    measurementId: "G-13DQMYDK74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code

            //End code
        });
    });
}
getData();