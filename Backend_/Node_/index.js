console.log(1);
setTimeout(() => {
  console.log(2);
}, 0);
Promise.resolve().then(() => {
  console.log(3);
});
console.log(4);

// 1 4 3 2 as promises has higher priority than callback

/*

   |        |        -------------------------
   |        |       |        Call back        |
   |        |       |         Queue           | if there is no Promises in Promises queue then call back that exists in call back queue executes
   |        |        -------------------------  first, else promises execute then call back
   |call    |
   |Stack   |
   |        |        -------------------------
   |        |       |        Promises         |
   |        |       |           Queue         |
   ----------        -------------------------

*/
