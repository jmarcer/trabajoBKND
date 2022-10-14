const UsuarioModel = require("../models/usuarios.model")

const obtenerUsuariosService = async () => {
    console.log("por obtener usuario");
    const usuarios = await UsuarioModel.find();
    console.log("usuario obtenido " + usuarios)
    return usuarios;

}

module.exports = obtenerUsuariosService;