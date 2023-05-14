const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  //connect with the smtp
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "oda.williamson71@ethereal.email",
      pass: "k3EDYQyfxdG5WUKNtH",
    },
  });

  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <mithun@.gamail.com>', // sender address
    to: "mithunkj@gmail.com", // list of receivers
    subject: "Hello Mithun", // Subject line
    text: "Hello Mithun kj", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);

  res.json(info);
};

module.exports = sendMail;
