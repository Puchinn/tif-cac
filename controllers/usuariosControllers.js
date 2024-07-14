const { DELETE } = require("sequelize/lib/query-types")
const usuariosModel = require ("../models/usuariosModel.js")

/* CRUD - CREATE - READ - UPDATE - DELETE */

/* FUNCION PARA TRAER TODOS LOS POSTEOS = READ - GET */
const traerUsuarios = async (req,res)=> {
try {
const usuarios =  await usuariosModel.findAll()
res.json(usuarios)
} catch (error) {
    res.json({message:error.message})
}
}

/* FUNCION PARA TRAER UN POSTEO = READ - GET */
const traerUnUsuario = async (req,res)=>{
try {
    const usuario = await usuariosModel.findByPk(req.params.id)
    res.json(usuario)
} catch (error) {
    res.json({message:error.message})
}
}

/* FUNCION QUE CREA UN REGISTRO  = CREATE - POST */

const crearUsuario = async (req,res)=>{
    try {
        await usuariosModel.create(req.body)
        res.json("Registro Creado Correctamente")
    } catch (error) {
        res.json({message:error.message})
    }
}

/* FUNCION QUE ACTUALIZA UN REGISTRO - UPDATE - PUT */

const actualizarUsuario = async(req,res)=>{
    try {
        await usuariosModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json("Registro Actualizado correctamente")
    } catch (error) {
        res.json({message:error.message})
    }
}

/* FUNCION PARA BORRAR UN REGISTRO - DELETE - DELETE */
const borrarUsuario = async (req,res)=>{
    try {
        await usuariosModel.destroy( { where:{id:req.params.id}})
        res.json("registro borrado correctamente")
    } catch (error) {
        res.json({message:error.message})
    }
}

module.exports= {traerUsuarios,traerUnUsuario,crearUsuario,actualizarUsuario,borrarUsuario}