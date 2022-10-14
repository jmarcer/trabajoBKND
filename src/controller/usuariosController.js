const agregarUsuarioService = require("../services/agregarUsuarioService");
const modifcarUsuarioService = require("../services/modificarUsuarioService");
const obtenerUsuariosService = require("../services/obtenerUsuarioService");
const eliminarUsuarioService= require("../services/eliminarUsuarioService" )

const agregarUsuario = async (req, res) => {
    try {
        await agregarUsuarioService(req);
        res.json({message: "Usuario agregada con exito."})
    } catch (error) {
        const msg = error.message
        res.json({message: "Ocurrió un error. " + msg})
    }
}

const obtenerUsuarios = async (req, res, next) => {
    try {
        const Usuarios = await obtenerUsuariosService();
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
        const { name} = req.params
        await UsuarioModel.deleteOne({name: name })
        res.json({message: "Usuario eliminado con exito"})
    } catch (error) {
        next(error);
    }
}

module.exports = {agregarUsuario, obtenerUsuarios, modificarUsuario, eliminarUsuario};