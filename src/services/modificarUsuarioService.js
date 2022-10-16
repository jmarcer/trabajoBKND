const UsuarioModel = require("../models/usuarios.model");

const modifcarUsuarioService = async (req) => {
    console.log(req.params);
    const usuario = req.body;
    console.log(usuario);
    const  _id  = req.params._id
    console.log(_id);
    
    const updateUsuario = await UsuarioModel.findById(_id);
    console.log(updateUsuario);

    updateUsuario.name = usuario.name;
    updateUsuario.age = usuario.age;
    updateUsuario.sex = usuario.sex;
    updateUsuario.ocupation = usuario.ocupation;
    await updateUsuario.save();
};

module.exports = modifcarUsuarioService;
