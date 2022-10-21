const { Schema, model } = require("mongoose");

const UsuarioSchema = new Schema({
  name: { type: String, required: [true, "Usuario necesita un nombre"] },
  age: { type: Number},
  id:{type: Number, require:true, unique:true},
  sex: { type: String, enum: ["Hombre", "Mujer", "Prefiere no contestar"] ,require: true},
  ocupation: { type: String }
});

const UsuarioModel = model("Usuarios", UsuarioSchema);

module.exports = UsuarioModel;