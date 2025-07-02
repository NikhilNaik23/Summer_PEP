// import fs from "fs";
// import path from "path";

// fs.readFile(
//   "C:\\Summer_PEP\\Backend_\\readingFiles\\data.txt",
//   "utf-8",
//   (err, data) => {
//     if (err) {
//       console.log("Something went wrong", err);
//       return;
//     }
//     console.log(data);
//   }
// );

/* fs.writeFile(
  "C:\\Summer_PEP\\Backend_\\readingFiles\\data.txt",
  "I've modified the file is this okay",
  () => {
    fs.readFile(
      "C:\\Summer_PEP\\Backend_\\readingFiles\\data.txt",
      "utf-8",
      (err, data) => {
        if (err) {
          console.log("Something went wrong", err);
          return;
        }
        console.log(data);
      }
    );
  }
); */

const { log } = require("console");
const fs = require("fs");

const data = fs.readFileSync(__dirname + "/data.txt", "utf-8");
console.log(data);

const writeData = fs.writeFileSync(
  __dirname + "/data.txt",
  "I've modified the file.",
  "utf-8"
);

const data2 = fs.readFileSync(__dirname + "/data.txt", "utf-8");
log(data2);
fs.appendFileSync(
  __dirname + "/data.txt",
  " After Modifying I've appended this",
  "utf-8"
);

const data1 = fs.readFileSync(__dirname + "/data.txt", "utf-8");
log(data1);
