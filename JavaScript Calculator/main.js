let total = 0;

// QUERY SELECTORS
document.querySelector("one").addEventListener("click", numberOne);

// OPERATIONS

// NUMBERS
function numberOne() {
  total = 0;
  document.querySelector("#total").innerText = total + 1;
}
