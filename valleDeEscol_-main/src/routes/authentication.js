const express =require('express');
const router = express.Router();
const inicioSchema=require("../models/usuario");   
    
router.post("/iniciar_Sesion", (req,res)=>{
    const {nombre_usuario, contraseña_usuario, correo_usuario} = req.body;
    const usuario = inicioSchema({
        nombre_usuario : nombre_usuario,
        contraseña_usuario : contraseña_usuario,
        correo_usuario : correo_usuario
    });
    user.clave = await usuario.encryptClave(usuario.clave);
    await usuario.save(); //metodo para guardar datos en MONGODB
    //res.json(usuario);
    res.json({
        message:"Usuario guardado."
    });
});

module.exports =router;

router.post('/login', async(req, res) => {
    //valdaciones
    const {error} = inicioSchema.validate(req.body.correo_usuario, req.body.contraseña_usuario);
    if (error) return res.status(400).json({error:'usuario no encontrado'});

    const usuario = await inicioSchema.findOne({correo: req.body.correo});
    if (!usuario) return res.status(400).json({ error: 'usuario no encontrado'});

    const passcheck = await bcrypt.compare(req.body.clave, usuario.contraseña_usuario);
    if (!passcheck) return res.status(400).json({ error: 'contraseña no válida'})

    res.json({
        error: null,
        date: 'exito bienvenido'
    })
})