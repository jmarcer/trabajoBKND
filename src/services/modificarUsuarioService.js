const UsuarioModel = require("../models/usuarios.model");

const modifcarUsuarioService = async (req) => {
    const usuario = req.body;
    const { name } = req.params
    const updateUsuario = await UsuarioModel.findOne({ name });
    updateUsuario.name = usuario.name;
    updateUsuario.age = usuario.age;
    updateUsuario.sex = usuario.sex;
    updateUsuario.ocupation = usuario.ocupation;
    await updateUsuario.save();
};

module.exports = modifcarUsuarioService;
