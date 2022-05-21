const mongoose = require ("mongoose");

const facturaSchema=mongoose.Schema({
fecha_factura:{
    type:Date,
    required: true
    
},
usuario_factura:{
    type:mongoose.Types.ObjectId,
    ref:'cliente',
    required: true
},
producto_factura:{
    type:mongoose.Types.ObjectId,
    ref:'Producto',
    required:true
},
});
module.exports = mongoose.model('factura', facturaSchema);