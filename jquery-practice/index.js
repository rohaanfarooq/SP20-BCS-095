function showAlert() {
  inputVal = $("input").val();
  console.log(inputVal);
  if (inputVal == "") {
    $("input").addClass("red");
    alert("Field cannot be empty");
  } else {
    $("input").addClass("green");
    alert("Response Submitted");
  }
}
