const agregarUsuarioService = require("../services/agregarUsuarioService");
const modifcarUsuarioService = require("../services/modificarUsuarioService");
const obtenerUsuariosService = require("../services/obtenerUsuarioService");
const eliminarUsuarioService= require("../services/eliminarUsuarioService" )
const { validationResult}= require("express-validator");

const agregarUsuario = async (req, res, next) => {
const errors = validationResult(req);
   if (!errors.isEmpty()) {
     return res.status(400).json({ errors: errors.array() });
   }
    try {
        await agregarUsuarioService(req);
        res.json({message: "Usuario agregada con exito."})
    } catch (error) {
        const msg = error.message
        res.json({message: "Ocurrió un error. " + msg})
        next(error.message);
    }
}

const obtenerUsuarios = async (req, res, next) => {

    try {
        const Usuarios = await obtenerUsuariosService();
        console.log( 'Solicitud de usuarios a las ' + new Date(req.requestTime) + '');
        res.json({Usuarios})
    } catch (error) {
        next(error)
    }
}

const modificarUsuario = async (req, res, next) => {
    try {
        await modifcarUsuarioService(req);
        res.json({message: 'Usuario modificada con exito.'})
    } catch (error) {
        next(error)
    }
}

const eliminarUsuario = async (req, res, next) => {
    try {
        await eliminarUsuarioService(req);
        res.json({message: "Usuario eliminado con exito"})
    } catch (error) {
        next(error);
    }
}

module.exports = {agregarUsuario, obtenerUsuarios, modificarUsuario, eliminarUsuario};