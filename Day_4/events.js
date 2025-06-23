let count = localStorage.getItem("count") ||0;
document.getElementById("counter").innerText = count;

document.getElementById("plus").addEventListener("click", () => {
  document.getElementById("counter").innerText = ++count;
  localStorage.setItem("count",count);
});
document.getElementById("minus").addEventListener("click", () => {
  document.getElementById("counter").innerText = --count;
  localStorage.setItem("count",count);
});

document.getElementById("reset").addEventListener("click", () => {
  count = 0;
  document.getElementById("counter").innerText = count;
  localStorage.setItem("count",count);
});

