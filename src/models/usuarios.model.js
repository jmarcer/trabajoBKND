const { Schema, model } = require("mongoose");

const UsuarioSchema = new Schema({
  _id: { type: String},
  name: { type: String, required: [true, "Usuario necesita un nombre"] },
  age: { type: Number},
  sex: { type: String, enum: ["Hombre", "Mujer", "Prefiere no contestar"] ,require: true},
  ocupation: { type: String },
});

const UsuarioModel = model("Usuarios", UsuarioSchema);

module.exports = UsuarioModel;