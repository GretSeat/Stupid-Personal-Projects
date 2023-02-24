const twentyFour = document.querySelector("#twentyFour");
const twentyFive = document.querySelector("#twentyFive");
const textHere = document.querySelector("h3");

document.querySelector("#patrick").addEventListener("click", runThis);
function runThis() {
  twentyFour.classList.add("hidden");
  twentyFive.classList.toggle("hidden");
  document.querySelector("h2").style.display = "none";
  document.querySelector("h3").innerText = "TWENTY FIVE";
  textHere.classList.add("big");
}
