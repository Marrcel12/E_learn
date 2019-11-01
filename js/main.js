//functions

function log_in() {
  console.log("eloooo");
  var email = document.getElementById("login").value;
  var password = document.getElementById("password").value;
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    document.getElementsByClassName("first")[0].innerHTML = "Podane dane sa nieprawidłowe"
    document.getElementsByClassName("first")[0].style.color = "red";
    // ...
  });
  document.getElementsByClassName("first")[0].innerHTML = "Witamy Cię"
  document.getElementsByClassName("first")[0].style.color = "green";
}
function log_out(){
  console.log("aaaa")
  firebase.auth().signOut()
}
//observer 

//listers
//trigger on enter

//login 

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    console.log( email)
    // write name of user
    document.getElementsByClassName("logout")[0].innerHTML="Wyloguj się, "+ email.slice(0,email.indexOf("@"))
    document.getElementsByClassName("logout")[0].addEventListener("click", log_out);
    document.getElementById("login_form").style.visibility="hidden";
    // ...
  } else {
    document.getElementsByClassName("logout")[0].innerHTML="Wyloguj się,"
    document.getElementById("login_form").style.visibility="visible";
    document.getElementById("password").addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submit").click();
      }
    })
    document.getElementById("submit").addEventListener("click", log_in);
  }
});


