let timer = 0;
let min = 0;
let hr = 0;
let sec = 0
let time = `${hr < 10 ? "0" + hr : hr}:${min < 10 ? "0" + min : min}:${
  sec < 10 ? "0" + sec : sec
}`;

document.getElementById("timer").innerText = time;
var a;
document.getElementById("start").addEventListener("click", () => {
  a = setInterval(() => {
    timer += 1;
    if (timer >= 60) {
      min = timer / 60;
    }
    if (min >= 60) {
      hr = timer / 3600;
    }
    if(timer)
    time = `${hr < 10 ? "0" + hr : hr}:${min < 10 ? "0" + min : min}:${
      sec < 10 ? "0" + sec : sec
    }`;
    console.log(timer);
    document.getElementById("timer").innerText = time;
  }, 100);
});

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(a);
});

document.getElementById("reset").addEventListener("click", () => {
  timer = 0;
});
