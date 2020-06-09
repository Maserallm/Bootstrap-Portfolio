const path = require("path");
const express = require("express");
const router = express.Router();
const rootDir = require("../util/path");
const nodemailer = require("nodemailer");

// const { google } = require("googleapis");
// const { OAuth2 } = google.auth;
// const OAUTH_PLAYGROUND = "https://developers.google.com/oauthplayground";

const {
  CLIENT_ID,
  CLIENT_SECRET,
  OAUTH_REFRESH_TOKEN,
  OAUTH_ACCESS_TOKEN
} = process.env;

// const Mailing = {};

// const oauth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, OAUTH_PLAYGROUND);
// router.get("/", (req, res) => {
//   res.sendFile(path.join(rootDir, "views", "index.html"));
// });

// Mailing.sendMail = req => {
//   oauth2Client.setCredentials({
//     refresh_token: OAUTH_REFRESH_TOKEN
//   });

//   const accessToken = oauth2Client.getAccessToken();
//   const output = `
//   <p>You have a new contact</p>
//   <h3>Contact Details</h3>

//   <ul>
//     <li>Name: ${req.name}</li>
//     <li>Email: ${req.email}</li>
//   </ul>

//     <h3>Message</h3>
//     <p>Message: ${req.message}</p>

//   `;

//   const transporter = nodemailer.createTransport({
//     host: "smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       // type: "OAuth2",
//       user: "0030ff440c0263", // generated ethereal user
//       pass: "b6ca812132cfea"
//       // clientId: CLIENT_ID, // generated ethereal password
//       // clientSecret: CLIENT_SECRET,
//       // refreshToken: OAUTH_REFRESH_TOKEN,
//       // accessToken
//     }
//   });
// };

router.post("/send", (req, res) => {
  console.log(req.body);
  const output = `
  <p>You have a new contact</p>
  <h3>Contact Details</h3>

  <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    <li>Subject: ${req.body.subject}</li>
  </ul>

    <h3>Message</h3>
    <p>Message: ${req.body.message}</p>
    
  `;

  const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "0030ff440c0263",
      pass: "b6ca812132cfea"
    }
  });

  transporter.sendMail(
    {
      from: req.body.email,
      to: "woo863@gmail.com",
      subject: req.body.subject,
      html: output
    },
    (err, info) => {
      if (err) return err;
      return info;
    }
  );
  // Mailing.sendMail(req.query);
  // let mailOptions = {
  //   from: `"Node Mailer Contact" <0030ff440c0263>`
  // };
  res.redirect("/");
});
module.exports = router;
