//diffrence of the sync and asyc

const fs = require("fs");
// const data = fs.readFileSync("read.txt", "utf-8");
// console.log(data);
// console.log("second data");

const data = fs.readFile("read.txt", "utf-8", (err, data) => {
  console.log(data);
});
console.log("second data is outside of the read data");
