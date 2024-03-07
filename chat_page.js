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
 room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4>" + name +" <img class='user_tick' src='tick.png'></h4";
         message_with_tag = "<h4 class= 'message_h4'>" + message + "</h4>";
         like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+ like +" onclick='updateLike(this.id)>'>";
      span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like: "+ like +"</span></button><hr>";

      row = name_with_tag + message_woth_tag +like_button + span_wiht_tag;
      document.getElementById("output").innerHTML += row;
      } });  }); }
getData();

function send(){
      msg = document.getElementById("msg").value; 
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value ="";
}



function updateLike(message_id)
{
console.log("clicked on the like button - " + message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_liked = Number(likes) + 1;
console.log(updated_likes);

firebase.database().ref(room_name).child(message_id).update({
      like : updated_likes
});
}

function logout (){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
      window.location.replace("index.html");
}