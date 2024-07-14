const { DELETE } = require("sequelize/lib/query-types")
const creadoresModel = require ("../models/creadoresModel.js")

/* CRUD - CREATE - READ - UPDATE - DELETE */

/* FUNCION PARA TRAER TODOS LOS POSTEOS = READ - GET */
const traerCreadores = async (req,res)=> {
try {
const creadores =  await creadoresModel.findAll()
res.json(creadores)
} catch (error) {
    res.json({message:error.message})
}
}

/* FUNCION PARA TRAER UN POSTEO = READ - GET */
const traerUnCreador = async (req,res)=>{
try {
    const creador = await creadoresModel.findByPk(req.params.id)
    res.json(creador)
} catch (error) {
    res.json({message:error.message})
}
}

/* FUNCION QUE CREA UN REGISTRO  = CREATE - POST */

const crearCreador = async (req,res)=>{
    try {
        await creadoresModel.create(req.body)
        res.json("Registro Creado Correctamente")
    } catch (error) {
        res.json({message:error.message})
    }
}

/* FUNCION QUE ACTUALIZA UN REGISTRO - UPDATE - PUT */

const actualizarCreador = async(req,res)=>{
    try {
        await creadoresModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json("Registro Actualizado correctamente")
    } catch (error) {
        res.json({message:error.message})
    }
}

/* FUNCION PARA BORRAR UN REGISTRO - DELETE - DELETE */
const borrarCreador = async (req,res)=>{
    try {
        await creadoresModel.destroy( { where:{id:req.params.id}})
        res.json("registro borrado correctamente")
    } catch (error) {
        res.json({message:error.message})
    }
}

module.exports= {traerCreadores,traerUnCreador,crearCreador,actualizarCreador,borrarCreador}