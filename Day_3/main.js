let x = 10;
let y = x;
console.log(x);
console.log(y);
y = 6;
console.log(x);
console.log(y);

let arr1 = [1, "a", 2, 3];
let arr2 = arr1;
console.log(arr1);
console.log(arr2);
arr2.push(6);
console.log(arr1);
console.log(arr2);

const obj1 = {
  name: "ABC",
  age: "20",
};

const obj2 = obj1;
obj2.gender = "male";

const obj3 = {
  name: "University",
  qualification: "B-tech",
};

obj2.education = obj3;

console.log(obj1);
console.log(obj2);

// Spread Operator
let arr3 = [...arr1, "Hey", "Good Morning", "Bye", ...arr2];
console.log(arr3);
let obj4 = { ...obj1, ...obj3 };
console.log(obj4);

// Array
var arr = [1, 2, 3, 4, 5, 6];
console.log(arr);

console.log(typeof arr[1]);
console.log(Array.isArray(arr));
console.log(Array.isArray(obj1));

var newArr = [];
arr.forEach((i) => {
  newArr.push(i);
});
console.log(newArr);

var newArr1 = arr.map((i) => {
  return i * i;
});
console.log(newArr1);

const filteredArr = arr.filter((i) => i % 2 === 0);
console.log(filteredArr);

const total = arr.reduce((sum, i) => (sum += i));
console.log(total);

//closures
function parentFun() {
  const x = 49;
  return function childFun() {
    console.log("I'm in child function");
    console.log(x);
  };
}
let val = parentFun();
val();

function calculatePower(y) {
  return function calc(x) {
    return x ** y;
  };
}

val = calculatePower(5);
let res = val(3);
console.log(res);
