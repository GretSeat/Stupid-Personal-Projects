let total = 0;

// QUERY SELECTORS
document.querySelector("one").addEventListener("click", numberOne);

// OPERATIONS

// NUMBERS
function numberOne() {
  document.querySelector("#total").innerText = total + 1;
}
