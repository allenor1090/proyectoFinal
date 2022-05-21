const express =require('express');
const router = express.Router();
const provedorSchema = require("../models/provedores"); 

//nuevo cliente
router.post("/provedores", (req,res) => {
    const provedor = provedorSchema(req.body);
    provedor
     .save()
     .then((data)=> res.json(data))
     .catch((error)=>res.json({message: error}))
 });
 
 module.exports = router;

 //consultar clientes
 router.get("/provedores", (req, res) => {
     provedorSchema.find()
     .then((data) => res.json(data))
     .catch((error) => res.json({message:error}));
 });

 //consultar cliente por id
 router.get("/provedores/:id", (req, res) =>{
     const { id } = req.params;
     provedorSchema
        .findByID(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));

 });

 //modificar por ID cliente
 router.put("/provedores/:id", (req, res) => {
     const { id } = req.params;
     const {nombre_provedor,correo,direccion,telefono,nit} = req.body;
     provedorSchema
        .updateOne({ _id: id}, {
            $set: {nombre_provedor,correo, direccion,telefono,nit}
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
 });

 //eliminar cliente por id
 router.delete("/provedores/:id", (req, res) => {
     const { id } = req.params;
     provedorSchema
        .remove({ _id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
 });
