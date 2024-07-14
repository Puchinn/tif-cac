const { DELETE } = require("sequelize/lib/query-types")
const feedbackModel = require ("../models/feedbackModel.js")

/* CRUD - CREATE - READ - UPDATE - DELETE */

/* FUNCION PARA TRAER TODOS LOS POSTEOS = READ - GET */
const traerFeedbacks = async (req,res)=> {
try {
const feedbacks =  await feedbackModel.findAll()
res.json(feedbacks)
} catch (error) {
    res.json({message:error.message})
}
}

/* FUNCION PARA TRAER UN POSTEO = READ - GET */
const traerUnFeedback = async (req,res)=>{
try {
    const feedback = await feedbackModel.findByPk(req.params.id)
    res.json(feedback)
} catch (error) {
    res.json({message:error.message})
}
}

/* FUNCION QUE CREA UN REGISTRO  = CREATE - POST */

const crearFeedback = async (req,res)=>{
    try {
        await feedbackModel.create(req.body)
        res.json("Registro Creado Correctamente")
    } catch (error) {
        res.json({message:error.message})
    }
}

/* FUNCION QUE ACTUALIZA UN REGISTRO - UPDATE - PUT */

const actualizarFeedback = async(req,res)=>{
    try {
        await feedbackModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json("Registro Actualizado correctamente")
    } catch (error) {
        res.json({message:error.message})
    }
}

/* FUNCION PARA BORRAR UN REGISTRO - DELETE - DELETE */
const borrarFeedback = async (req,res)=>{
    try {
        await feedbackModel.destroy( { where:{id:req.params.id}})
        res.json("registro borrado correctamente")
    } catch (error) {
        res.json({message:error.message})
    }
}

module.exports= {traerFeedbacks,traerUnFeedback,crearFeedback,actualizarFeedback,borrarFeedback}