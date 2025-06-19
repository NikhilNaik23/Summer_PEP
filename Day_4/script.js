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

let i = 10;
const timer = setInterval(() => {
  p.innerText = i;
  if (i === 0) {
    stopInterval();
  }
  i -= 1;
}, 1000);

const stopInterval = () => {
  alert("Time Up");
  clearInterval(timer);
};
