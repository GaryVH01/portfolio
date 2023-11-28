const mongoose = require("mongoose");

// Création d'un modèle pour la création d'un utilisateur dans la base de données
const mailSchema = mongoose.Schema({
  name: { type: String, reuired: true },
  email: { type: String, required: true, unique: true },
  message: { type: String, required: true },
});

module.exports = mongoose.model("Mails", mailSchema);
