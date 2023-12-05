const path = require("path");
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./dataBase");
const mailModel = require("../models/mail");

const PORT = process.env.PORT || 3004;

connectDB(); // connexion à la database

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// Methode get permettant de récupérer tous les mails de la base de données avec le endpoint 'api/contact'
app.get("/api/contact", (req, res, next) => {
  mailModel
    .find() // utilisation de la méthode find pour récupérer la liste complète des sauces
    .then((mails) => res.status(200).json(mails)) // on renvoie le tableau de toutes les sauces
    .catch((error) => res.status(400).json({ error: error })); // sinon on renvoie une erreur 400
});

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  secure: "false",
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("ready to send");
  }
});

app.post(
  "/api/contact",
  bodyParser.urlencoded({ extended: false }),
  (req, res) => {
    mailModel.create(req.body);
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const mail = {
      from: name,
      to: process.env.EMAIL_ADDRESS,
      subject: "contact form submission - portfolio",
      html: `<p>Bonjour Gary, vous avez un nouveau message de Mr/Mme ${name}</p>
      <br>
      <p>${message}</p>
      <br>
      <p>Coordonnées du contact :  </p>
      <p>Email: ${email}</p>
             `,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json(error);
      } else {
        res.json({ code: 200, status: "Message sent" });
      }
    });
  }
);

app.listen(PORT, () => {
  console.log(`server is online on port: ${PORT}`);
});
