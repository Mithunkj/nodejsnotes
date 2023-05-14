const express = require("express");
const app = express();

let PORT = 5000;
const sendMail = require("./controllers/sendMail");
app.get("/", (req, res) => {
  res.send("I AM A SERVER");
});

app.get("/mail", sendMail);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Iam live in port no ${PORT}`);
    });
  } catch (error) {}
};

start();
