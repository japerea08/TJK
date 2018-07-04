$(document).ready(function(){
    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCQCiBJxvHW-VhUpu5RfeuPjYx2kqulWKI",
    authDomain: "tjkwebsite.firebaseapp.com",
    databaseURL: "https://tjkwebsite.firebaseio.com",
    projectId: "tjkwebsite",
    storageBucket: "tjkwebsite.appspot.com",
    messagingSenderId: "123366139864"
  };
  firebase.initializeApp(config);

  //getting elements
  const txtEmail = $("#txtEmail");
  const txtPassword = $("#txtPassword");
  const btnLogin = $("#btnLogin");
  const btnSignUp = $("#btnSignUp");

  //add listener for login event
  btnLogin.on("click", e =>{
    //get the email and password filled out by user
    const email = txtEmail.val();
    const pass = txtPassword.val();
    const auth = firebase.auth();
    console.log(email + " " + pass);

  });

});