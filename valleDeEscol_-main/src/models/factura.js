const mongoose = require("mongoose");

const facturaSchema = mongoose.Schema({
    fecha_factura: {
        type: Date,
        required: true

    },
    usuario_factura: {
        type: String,
        ref: 'cliente',
        required: true
    },
    producto_factura: {
        type: String,
        ref: 'Producto',
        required: true
    },
    valor_factura: {
        type: Number,
        requiered: true
    }
});
module.exports = mongoose.model('factura', facturaSchema);