const { Schema, model } = require("mongoose");

const UsuarioSchema = new Schema({
  name: { type: String, required: [true, "Usuario necesita un nombre"] },
  age: { type: Number,  required: true },
  sex: { type: String, enum: ["Hombre", "Mujer", "Prefiere no contestar"] ,require: true},
  ocupation: { type: String },
});

const UsuarioModel = model("Usuario", UsuarioSchema);

module.exports = UsuarioModel;