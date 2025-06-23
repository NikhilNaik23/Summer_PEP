function fun(x = 4) {
  console.log(x);
}
fun(6);
fun();

// Classes
class Student {
  constructor(fname = "Unknown", lname = "User") {
    this.fname = fname;
    this.lname = lname;
  }
  greet() {
    console.log(`Greeting ${this.lname}`);
  }
}

let s = new Student();
s.greet();
let m = new Student("", "Naik");
m.greet();

function cb(res, rej) {
  let x = 4;
  if (x > 3) res("X is greater than 3");
  else rej("x is not greater than 3");
}
const p = new Promise(cb);
p.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

// const cart = require("./script2");
// cart.addToCart();

export function add(x, y) {
  console.log(x + y);
}
