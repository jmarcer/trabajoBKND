const {
    obtenerUsuarios,
    agregarUsuario,
    modificarUsuario,
    eliminarUsuario,
  } = require("../controller/usuariosController");
  const express = require("express");
  const UsuarioModel = require("../models/usuarios.model");
  const router = express.Router();
  
  router.post("/Usuario", agregarUsuario);
  router.get("/Usuario", obtenerUsuarios);
  router.put("/Usuario/:_id", modificarUsuario);
  router.delete("/Usuario/:_id", eliminarUsuario)
  
  module.exports = router;