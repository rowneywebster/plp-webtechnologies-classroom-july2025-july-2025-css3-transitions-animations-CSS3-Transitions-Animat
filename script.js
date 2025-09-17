// --- Part 2: JavaScript Functions ---

// Global variable (accessible by all functions)
let globalMessage = "I am global 🌍";

// Function demonstrating local vs global scope
function demoScope() {
  let localMessage = "I am local 🔒"; // Local variable

  // Function with return value
  function combineMessages(extra) {
    return globalMessage + " + " + localMessage + " + " + extra;
  }

  // Display the result
  document.getElementById("scope-result").textContent =
    combineMessages("added parameter value");
}

// Function that accepts parameters, calculates and returns result
function calculateScale(base, factor) {
  return base * factor;
}

// --- Part 3: Combining CSS + JS ---

function animateBox() {
  const box = document.getElementById("magic-box");

  // Remove class if already present (so it can re-trigger)
  box.classList.remove("animate");

  // Use setTimeout to ensure reflow before adding class back
  setTimeout(() => {
    box.classList.add("animate");
  }, 50);
}
