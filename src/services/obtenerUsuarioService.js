const UsuarioModel = require("../models/usuarios.model")

const obtenerUsuariosService = async () => {
    const usuarios = await UsuarioModel.find();
    return usuarios;
}

module.exports = obtenerUsuariosService;