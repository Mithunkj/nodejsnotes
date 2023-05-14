const fs = require("fs");
//fs.writeFileSync("read.txt","welcome");
//fs.writeFileSync("read.txt","mithun welcome");
//fs.appendFileSync("read.txt", "  how are you ");
const buf_data = fs.readFileSync("read.txt");
console.log(buf_data);


org_data = buf_data.toString()
console.log(org_data);

fs.renameSync("read.txt","rewrite.txt")
