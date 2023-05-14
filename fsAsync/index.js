const fs = require("fs");
//creat file
fs.writeFile("read.txt", "My name is mithun", (err) => {
  console.log("file is created");
  console.log(err);
});
//add text in file
fs.appendFile("read.txt", "  this is mithun", (err) => {
  console.log("task is completed");
});
//read the text from other file
fs.readFile("read.txt", "utf-8", (err, data) => {
  console.log(data);
  console.log(err);
});
