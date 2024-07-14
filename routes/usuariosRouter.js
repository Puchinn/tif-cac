const express = require ("express")

const {traerUsuarios,traerUnUsuario,crearUsuario,actualizarUsuario,borrarUsuario } = require ("../controllers/usuariosControllers.js")

const router = express.Router()

router.get ("/" ,traerUsuarios)
router.get ("/:id",traerUnUsuario)
router.post ("/", crearUsuario)
router.put ("/:id", actualizarUsuario)
router.delete ("/id", borrarUsuario) 

module.exports = router