$(document).ready(function() {
  //   $(".parallax").parallax();

  //initializing M
  //window.Materialize.toast('I am a toast!', 4000)
  //var M = window.Materialize;

  //M.AutoInit();

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA44cuiO_1s-lL80kxSOCEZRRuPt06--9g",
    authDomain: "new-portfolio-31b1a.firebaseapp.com",
    databaseURL: "https://new-portfolio-31b1a.firebaseio.com",
    projectId: "new-portfolio-31b1a",
    storageBucket: "new-portfolio-31b1a.appspot.com",
    messagingSenderId: "920487376304"
  };
  firebase.initializeApp(config);

  // Create a variable to reference the database.
  var database = firebase.database();
  // Initial Values
  var name = "";
  var email = "";
  var message = "";
  // Capture Button Click
  $("#contactMe").on("click", function(event) {
    event.preventDefault();

    // Grabbed values from text-boxes
    name = $("#name-input")
      .val()
      .trim();
    email = $("#email-input")
      .val()
      .trim();
    message = $("#message-input")
      .val()
      .trim();
    console.log(name + " | " + email + " | " + message);
    // Code for "Setting values in the database"
    if (name.length > 0 && email.length > 0 && message.length > 0) {
      database.ref().push(
        {
          name: name,
          email: email,
          message: message,
          dateAdded: firebase.database.ServerValue.TIMESTAMP
        },
        function(error) {
          if (error) {
            window.Materialize.toast("Failed!!", 2000, "deep-orange accent-3");
            console.log("Errors handled: " + error.code);
          } else {
            window.Materialize.toast("I got your message", 2000, "green");
          }
        }
      );
    } else {
      window.Materialize.toast(
        "All fields are required!!",
        2000,
        "red darken-1"
      );
    }

    // Firebase watcher + initial loader HINT: .on("value")
    // database.ref().on(
    //   "value",
    //   function(snapshot) {
    //     // Log everything that's coming out of snapshot
    //     console.log(snapshot.val());
    //     console.log(snapshot.val().name);
    //     console.log(snapshot.val().email);
    //     console.log(snapshot.val().message);

    //     // Change the HTML to reflect
    //     $("#name-display").text(snapshot.val().name);
    //     $("#email-display").text(snapshot.val().email);
    //     $("#message-display").text(snapshot.val().message);

    //     // Handle the errors
    //   },
    //   function(errorObject) {
    //     console.log("Errors handled: " + errorObject.code);
    //   }
    // );
  });
});
