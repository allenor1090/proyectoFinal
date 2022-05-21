const  mongoose  = require("mongoose");

const inicioSchema=mongoose.Schema({
    nombre_usuario:{
        type: String,
        required: true

    },
    contraseña_usuario:{
        type:String,
        required:true
    },
    correo_usuario:{
        type:String,
        required:true
    }

});

inicioSchema.methods.encryptClave = async(clave) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(clave, salt);
}

module.exports =mongoose.model('Incio', inicioSchema);