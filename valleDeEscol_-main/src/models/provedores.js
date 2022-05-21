const  mongoose  = require("mongoose");

const provedorSchema = mongoose.Schema({
    nombre_provedor:{
        type: String, 
        required: true
    },
    correo:{
        type: String,
        required: true
    },
    direccion:{
         type: String,
         required: true
    },
    telefono:{
        type:Number,
        required: true
    },
    nit:{
        type:Number,
        required:true
    }

});
module.exports = mongoose.model('provedor', provedorSchema);