const UsuarioModel = require("../models/usuarios.model");

const eliminarUsuarioService = async (req) => {  
    const { _id } = req.params  
    /*const usuario = await UsuarioModel.findOne({_id});
    console.log(usuario);*/
    await UsuarioModel.deleteOne({_id: _id })
    
 
};

module.exports = eliminarUsuarioService;
