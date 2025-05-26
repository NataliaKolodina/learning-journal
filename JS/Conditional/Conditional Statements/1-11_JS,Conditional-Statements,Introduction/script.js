let isLoggedIn = false;

console.log(isLoggedIn ? "Welcome back!" : "Please log in.");

let age = 21;
let hasID = true;
if (age >= 18 && hasID) {
  console.log("Access granted.");
} else {
  console.log("Access denied.");
}

let isStudent = false;
let isMember = true;
if (isStudent || isMember) {
  console.log("Discount applied.");
} else {
  console.log("No discount available.");
}
