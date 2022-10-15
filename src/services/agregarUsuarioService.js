
const UsuarioModel = require("../models/usuarios.model");

const agregarUsuarioService = async (req) => {
  const axios = require("axios");
  const usuario = req.body;
  const res = await axios.get("https://api.agify.io/?name="+usuario.name);
  usuario.age=res.data.age;
  const newUsuario = new UsuarioModel(usuario);
  await newUsuario.save();
};

module.exports = agregarUsuarioService;