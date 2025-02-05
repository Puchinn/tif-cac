const { DELETE } = require("sequelize/lib/query-types")
const paisesModel = require ("../models/paisesModel.js")

/* CRUD - CREATE - READ - UPDATE - DELETE */

/* FUNCION PARA TRAER TODOS LOS POSTEOS = READ - GET */
const traerPaises = async (req,res)=> {
try {
const paises =  await paisesModel.findAll()
res.json(paises)
} catch (error) {
    res.json({message:error.message})
}
}

/* FUNCION PARA TRAER UN POSTEO = READ - GET */
const traerUnPais = async (req,res)=>{
try {
    const pais = await paisesModel.findByPk(req.params.id)
    res.json(pais)
} catch (error) {
    res.json({message:error.message})
}
}

/* FUNCION QUE CREA UN REGISTRO  = CREATE - POST */

const crearPais = async (req,res)=>{
    try {
        await paisesModel.create(req.body)
        res.json("Registro Creado Correctamente")
    } catch (error) {
        res.json({message:error.message})
    }
}

/* FUNCION QUE ACTUALIZA UN REGISTRO - UPDATE - PUT */

const actualizarPais = async(req,res)=>{
    try {
        await paisesModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json("Registro Actualizado correctamente")
    } catch (error) {
        res.json({message:error.message})
    }
}

/* FUNCION PARA BORRAR UN REGISTRO - DELETE - DELETE */
const borrarPais = async (req,res)=>{
    try {
        await paisesModel.destroy( { where:{id:req.params.id}})
        res.json("registro borrado correctamente")
    } catch (error) {
        res.json({message:error.message})
    }
}

module.exports= {traerPaises,traerUnPais,crearPais,actualizarPais,borrarPais}