
var firebaseConfig = {
      apiKey: "AIzaSyBOTLHdZGinr3wWu7B2Atfd4UJGg1qoNos",
      authDomain: "prject-kwiter.firebaseapp.com",
      databaseURL: "https://prject-kwiter-default-rtdb.firebaseio.com",
      projectId: "prject-kwiter",
      storageBucket: "prject-kwiter.appspot.com",
      messagingSenderId: "1375918917",
      appId: "1:1375918917:web:ca28105b806acb8fc67c2c",
      measurementId: "G-L6KPVVLHMK"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
