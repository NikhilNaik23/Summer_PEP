var rand = Math.ceil(Math.random() * 100);
console.log(rand);
let chances = 7;
while (chances > 0) {
  const input = prompt("Enter a number: ");
  chances = chances - 1;
  if (input > rand) {
    alert("Your number is too high");
  } else if (input < rand) {
    alert("Your number is too low");
  } else {
    alert("You guessed it correctly");
    const playAgain = prompt("Want to play again(Y or N)");
    if (playAgain === "Y") {
      chances = 7;
      rand = Math.ceil(Math.random() * 100);
    } else {
      alert("Exiting....");
      chances = 0;
    }
  }
}
if (chances === 0) {
  alert("Chances are finished, you've to refresh to play again");
}
