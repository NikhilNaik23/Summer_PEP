// console.dir(window);

let heading = document.getElementById("heading");
console.log(heading.innerText);
heading.textContent = "I've Changed the heading";
heading.style.color = "white";

document.body.style.backgroundColor = "blue";
document.body.style.fontFamily = "cursive";

document.body.querySelectorAll("p").forEach((i) => (i.style.color = "red"));
document.body.getElementsByTagName("p").item(2).style.color = "green";
console.log(document.getElementsByTagName("p").length);

document.querySelectorAll(".white")[1].style.color = "white";

const p = (document.createElement("p").innerText = "This is last paragraph");

const div = document.getElementsByTagName("div")[0].append(p);
