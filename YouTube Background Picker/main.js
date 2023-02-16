document.getElementById("red").onclick = partyRed;
document.getElementById("btn").onclick = reset;

function partyRed() {
  document.querySelector("body").style.backgroundColor = "red";
}
function reset() {
  document.querySelector("body").style.backgroundColor = "white";
}
