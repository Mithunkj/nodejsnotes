const fs = require("fs");
//this is object from user
const bioData = {
  name: "Mithun",
  mobile: "6361849221",
  addrass: "jp nagara bengalur",
};

//object converted to Json formet
const jsonData = JSON.stringify(bioData);
//console.log(jsonData);

//creaqte the new json file
//fs.writeFile("json1.json", jsonData, (err) => {});

//read the json file and converted into object
fs.readFile("json1.json", "utf-8", (err, data) => {
  console.log(data);
  const orgData = JSON.parse(data);
  console.log(orgData);
});
