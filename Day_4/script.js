let h1 = document.getElementById("h1");
let h2 = document.getElementById("h2");
let h3 = document.getElementById("h3");
let p = document.getElementById("p");

/* const millisecond = Number(prompt("Enter the seconds ")) * 1000;

setTimeout(() => {
  h1.innerText = "Heading 1";
  setTimeout(() => {
    h2.innerText = "Heading 2";
    setTimeout(() => {
      h3.innerText = "Heading 3";
    }, 2000);
  }, 2000);
}, millisecond); */

var timer;

let i = 10;
function runTimer() {
  timer = setInterval(() => {
    p.innerText = i;
    if (i === 0) {
      stopInterval();
    }
    i -= 1;
  }, 1000);
}

runTimer();
document.getElementById("stop").addEventListener("click", () => {
  clearInterval(timer);
});

document.getElementById("reset").addEventListener("click", () => {
  i = 10;
  clearInterval(timer);
  runTimer();
});

const stopInterval = () => {
  alert("Time Up");
  clearInterval(timer);
};



/* console.log(1);

setTimeout(() => {
  console.log(2);
});

console.log(3);
 */