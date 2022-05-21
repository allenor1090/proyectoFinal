const express =require('express');
const router = express.Router();
const facturaSchema = require("../models/factura"); 

router.post("/factura", (req,res) => {
    const facturas = facturaSchema(req.body);
    facturas
     .save()
     .then((data)=> res.json(data))
     .catch((error)=>res.json({message: error}));
 });

 module.exports = router;

 
 //consultar clientes
 router.get("/factura", ( req, res) => {
    facturaSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});

//consultar cliente por id
router.get("/factura/:id", (req, res) =>{
    const { id } = req.params;
    facturaSchema
       .findById(id)
       .then((data) => res.json(data))
       .catch((error) => res.json({ message: error}));

});

//modificar por ID cliente
router.put("/factura/:id", (req, res) => {
    const { id } = req.params;
    const {fecha_factura,usuario_factura,producto_factura} = req.body;
    facturaSchema
       .updateOne({ _id: id}, {
           $set: {fecha_factura,usuario_factura,producto_factura}
       })
       .then((data) => res.json(data))
       .catch((error) => res.json({ message: error}));
});

//eliminar cliente por id
router.delete("/factura/:id", (req, res) => {
    const { id } = req.params;
    facturaSchema
       .remove({ _id: id})
       .then((data) => res.json(data))
       .catch((error) => res.json({ message: error}));
});
