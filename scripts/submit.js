function clearInputFields() {
  document.getElementById("full-name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("r").value = "";
  document.getElementById("keyphrase").value = "";
}

function testForm() {
  var fNameForm = document.getElementById("full-name").value;
  var emailForm = document.getElementById("email").value;
  var ratingForm = document.getElementById("r").value;
  var userNameForm = document.getElementById("keyphrase").value;
    
  if (fNameForm != "" && emailForm != "" && ratingForm != "" && userNameForm != "") {
    alert(fNameForm + " " + emailForm + " " + ratingForm + " " + userNameForm + " ");
  } else {
    alert("At least one input field is empty");
  }
  }

  function formToTable() {
    var fNameForm = document.getElementById("full-name").value;
    var emailForm = document.getElementById("email").value;
    var ratingForm = document.getElementById("r").value;
    var userNameForm = document.getElementById("keyphrase").value;
    var fNameTable = document.getElementById("table-name");
    var emailTable = document.getElementById("table-email");
    var ratingTable = document.getElementById("table-rating");
    var userNameTable = document.getElementById("table-username");

    document.getElementById("results").style.display = "block";
 
    fNameTable.innerHTML = fNameForm;
    emailTable.innerHTML = emailForm;
    ratingTable.innerHTML = ratingForm;
    userNameTable.innerHTML = userNameForm;
  }