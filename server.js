const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const homeRoute = require("./route/home");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
const sgMail = require("@sendgrid/mail");

const app = express();

const PORT = process.env.PORT || 9050;

// body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static Files
app.use(express.static(path.join(__dirname, "public")));
// dotenv.config();
app.use("/api", homeRoute);

// const client = require("@sendgrid/client");
// client.setApiKey(process.env.SENDGRID_API_KEY);
// const request = {
//   method: "GET",
//   url: "/v3/api_keys"
// };
// client.request(request).then(([response, body]) => {
//   console.log(response.statusCode);
//   console.log(body);
// });

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// const msg = {
//   to: "test@example.com",
//   from: "test@example.com",
//   subject: "Sending with Twilio SendGrid is Fun",
//   text: "and easy to do anywhere, even with Node.js",
//   html: "<strong>and easy to do anywhere, even with Node.js</strong>"
// };
// sgMail.send(msg);

// transporter.sendMail({
//     to: email,
//     from: ,
//     subject: ,
//     html:
// })

// app.use((req, res) => {
//   res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
// });

app.listen(PORT, () => {
  console.log(`Server is runnign on port ${PORT}`);
});
