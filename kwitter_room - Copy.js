
var firebaseConfig = {
      apiKey: "AIzaSyAtb5xuOtcei3hodymXCJhKgyXrDEbZ5G0",
      authDomain: "kwitter-54d0f.firebaseapp.com",
      databaseURL: "https://kwitter-54d0f-default-rtdb.firebaseio.com",
      projectId: "kwitter-54d0f",
      storageBucket: "kwitter-54d0f.appspot.com",
      messagingSenderId: "193829415901",
      appId: "1:193829415901:web:b2ddb9a59eda597d472434"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}