function resetFields() {
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}

function submitForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username && password) {
    alert("Login successful!");
  } else {
    alert("Please enter username and password.");
  }
}
