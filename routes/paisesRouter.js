const express = require ("express")

const {traerPaises,traerUnPais,crearPais,actualizarPais,borrarPais } = require ("../controllers/paisesControllers.js")

const router = express.Router()

router.get ("/" ,traerPaises)
router.get ("/:id",traerUnPais)
router.post ("/", crearPais)
router.put ("/:id", actualizarPais)
router.delete ("/id", borrarPais) 

module.exports = router