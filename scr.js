function duplicateString() {
  var inputString = document.getElementById("inputString").value;
  var duplicatedString = (inputString + "-").repeat(10);
  duplicatedString = duplicatedString.slice(0, -1);
  document.getElementById("result").innerHTML = duplicatedString;
}
