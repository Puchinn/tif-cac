const express = require ("express")
const cors = require ("cors") 

const creadoresRouter = require ("./routes/creadoresRouter.js")
const paisesRouter = require ("./routes/paisesRouter.js")
const feedbackRouter = require ("./routes/feedbackRouter.js")
const usuariosRouter = require ("./routes/usuariosRouter.js")


const app = express()
const port = 3030

const db = require ("./data/db.js")

app.use(cors()) // habilito el intercambio de información
app.use(express.json()) // analiza los request

app.get ("/",(req,res)=>{
res.send ("estas en el home")
})  // sin modularizar

app.use ("/creadores",creadoresRouter) // modularizado
app.use ("/paises",paisesRouter) // modularizado
app.use ("/feedbacks",feedbackRouter) // modularizado
app.use ("/usuarios",usuariosRouter) // modularizado


// conexion a la base de datos

const conexionDB = async ()=>{
    try {
        await db.authenticate()
        console.log(`Conectado Ok a la Base de datos`);
    } catch (error) {
        console.log(`Hay un error y es el siguiente : ${error}`);
    }
}


app.listen (port,()=>{
    conexionDB()
    console.log(`Servidor Ok en el puerto ${port}`);
})

