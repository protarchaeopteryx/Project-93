import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
const firebaseConfig = {
  apiKey: "AIzaSyAfFtK1nHmB22fQc_CudpqbL3VaZmAFzY0",
  authDomain: "class-93-website.firebaseapp.com",
  databaseURL: "https://class-93-website-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "class-93-website",
  storageBucket: "class-93-website.appspot.com",
  messagingSenderId: "871544569620",
  appId: "1:871544569620:web:3a77df4de9071a464b8c01"
};
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
