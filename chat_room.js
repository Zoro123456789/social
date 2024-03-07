const firebaseConfig = {
      apiKey: "AIzaSyAUTVfmACaq5gh6oD6OCiDfcg6JOu3sDeQ",
      authDomain: "social-foresttttttt.firebaseapp.com",
      databaseURL: "https://social-foresttttttt-default-rtdb.firebaseio.com",
      projectId: "social-foresttttttt",
      storageBucket: "social-foresttttttt.appspot.com",
      messagingSenderId: "895169138395",
      appId: "1:895169138395:web:aef9d8c0035ec92d78c6fe",
      measurementId: "G-KBXNTQC92T"
    };
    
    
 firebase.initializeApp(firebaseConfig);

 user_name=localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function getData()
 {firebase.database().ref("/").on('value',
  function(snapshot) 
  {document.getElementById("output").innerHTML = "";
  snapshot.forEach(function(childSnapshot) {
      childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "chat_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location ="chat_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location ="chat_page.html";
}