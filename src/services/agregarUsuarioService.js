const UsuarioModel = require("../models/usuarios.model");

const agregarUsuarioService = async (req) => {
  const usuario = req.body;
  const newUsuario = new UsuarioModel(usuario);
  await newUsuario.save();
};

module.exports = agregarUsuarioService;