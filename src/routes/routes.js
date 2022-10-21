const {
    obtenerUsuarios,
    agregarUsuario,
    modificarUsuario,
    eliminarUsuario,
  } = require("../controller/usuariosController");
  const express = require("express");
  const router = express.Router();
  const {body}= require("express-validator");
const logMiddlware = require("../utils/middleware/logMiddleware");
  
  router.post("/Usuario", body('name').isLength({ min: 5 }).withMessage("Nombre debe tener mas de tres caracteres"), agregarUsuario);
  
  var requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    next();
  };
  
  router.use(requestTime);
   
  router.get("/Usuario", logMiddlware, obtenerUsuarios);
  router.put("/Usuario/:_id", modificarUsuario);
  router.delete("/Usuario/:_id", eliminarUsuario)
  
  module.exports = router;