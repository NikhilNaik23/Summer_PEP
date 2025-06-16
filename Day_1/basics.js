"use strict";
var $name = "Nikhil";
var age = 20;
let isStudent;
isStudent = true;
const _location = {
  city: "Hyderabad",
  state: "Telangana",
  postalCode: 500048,
};
console.log($name);
console.log(age);
console.log(isStudent);
console.log(_location);
console.log(_location.city);
console.log(_location.state);
console.log(_location.postalCode);
if (isStudent) {
  console.log("Eligible for Student offer");
} else {
  console.log("Not a student");
}

function sum(a, b) {
  return a + b;
}

let res = sum(5, 9);
console.log(res);

if (res % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

if (age >= 18) {
  console.log("Candidate is eligible to vote");
} else {
  console.log("Candidate is not eligible to vote");
}

let friends = [
  { name: "A", phone: 1 },
  { name: "B", phone: 2 },
  { name: "C", phone: 3 },
  { name: "D", phone: 4 },
  { name: "E", phone: 5 },
];

friends.push({ name: "F", phone: 6 });

console.log(friends[1].name);
console.log(friends[1].phone);

for (let i of friends) {
  console.log(i);
}
console.log();
for (let i in friends) {
  console.log(friends[i]);
}

const sub = (a, b) => a - b;
res = sub(5, 9);
console.log(res);

(function (a = 5, b = 3) {
  console.log(a * b);
  return a * b;
})();
console.log();

friends.forEach((friend) => {
  console.log(friend);
});
console.log();

const filteredFriends = friends.filter((friend) => friend.phone >= 3);
console.log(filteredFriends);

const mul = () => {
  let a = 5 * 3;
  return a;
};
console.log(mul());

function add(a, b, ...c) {
  console.log(arguments);
  return a + b + c.reduce((sum, num) => sum + num, 0);
}
res = add(1, 2, 3, 4, 5, 6);
console.log(res);

function getSecretKey() {
  console.log(arguments[0]);
  return "x1ukVPVS9mhAghQ==";
}
console.log(getSecretKey("Hey"));
// console.log(getSecretKey())

let a = "ABC";
let b = a.concat("DEF");
console.log(b);
console.log(b.length);
console.log(b.split("D"));
console.log(b.slice(1, 3));
console.log(b.includes("ABC"));
console.log(b.substring(1, 4));
// console.log(b.substr(1, 5));
a = b.replace("ABC", "abcaa");
console.log(a);
console.log(a.replaceAll("a", "Y"));
console.log(a.endsWith("GHI"));
console.log(a.endsWith("DEF"));
console.log(a.startsWith("DEF"));
console.log(a.startsWith("abc"));

a = "  a bc  a";
let i = 0;
while (a[i] == " ") {
  i++;
}
let j = a.length - 1;
while (a[j] == " ") {
  j--;
}
b = a.slice(i, j + 1);
console.log(b);

const secondsToTime = (seconds) => {
  let d = 24 * 60 * 60;
  let h = 60 * 60;
  let m = 60;

  let day = 0;
  if (seconds >= d) {
    day = seconds / d;
    seconds = seconds % d;
  }
  let hour = 0;
  if (seconds >= h) {
    hour = seconds / h;
    seconds = seconds % h;
  }
  let min = 0;
  if (seconds >= m) {
    min = seconds / m;
    seconds = seconds % m;
  }
  console.log(
    `${day < 10 ? "0" + Math.floor(day) : Math.floor(day)}:${
      hour < 10 ? "0" + Math.floor(hour) : Math.floor(hour)
    }:${min < 10 ? "0" + Math.floor(min) : Math.floor(min)}:${
      seconds < 10 ? "0" + Math.floor(seconds) : Math.floor(seconds)
    }`
  );
};

secondsToTime(86458);
