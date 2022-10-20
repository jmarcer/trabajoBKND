const {
    obtenerUsuarios,
    agregarUsuario,
    modificarUsuario,
    eliminarUsuario,
  } = require("../controller/usuariosController");
  const express = require("express");
  const router = express.Router();
  const {body}= require("express-validator");
  
  router.post("/Usuario", body('name').isLength({ min: 5 }).withMessage("Nombre debe tener mas de tres caracteres"), agregarUsuario);
  router.get("/Usuario", obtenerUsuarios);
  router.put("/Usuario/:_id", modificarUsuario);
  router.delete("/Usuario/:_id", eliminarUsuario)
  
  module.exports = router;