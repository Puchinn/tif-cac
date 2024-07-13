const express = require ("express")

const {traerPaises,traerUnPais,crearPais,actualizarPaies,borrarPais } = require ("../controllers/paisesControllers.js")

const router = express.Router()

router.get ("/" ,traerPaises)
router.get ("/:id",traerUnPais)*
router.post ("/", crearPais)
router.put ("/:id", actualizarPaies)
router.delete ("/id", borrarPais) 

module.exports = router