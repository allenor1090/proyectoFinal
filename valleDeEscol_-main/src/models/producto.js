const  mongoose  = require("mongoose");
 
const productoSchema= mongoose.Schema({
    nombre_producto:{
       type : String,
       require:true
    },
    stock:{
        type: Number,
        require:true
    }
});
module.exports =mongoose.model('producto', productoSchema);