const UsuarioModel = require("../models/usuarios.model");

const modifcarUsuarioService = async (req) => {
    const usuario = req.body;
    const  {_id}  = req.params;
    console.log(_id);
    const updateUsuario = await UsuarioModel.findById(_id).exec();
    console.log(updateUsuario);
    if(!updateUsuario)throw new Error("Usuario not found");
    updateUsuario.name = usuario.name;
    updateUsuario.age = usuario.age;
    updateUsuario.sex = usuario.sex;
    updateUsuario.ocupation = usuario.ocupation;
    await updateUsuario.save();
};

module.exports = modifcarUsuarioService;
