const express = require ("express")

const {traerCreadores,traerUnCreador,crearCreador,actualizarCreador,borrarCreador } = require ("../controllers/creadoresControllers.js")

const router = express.Router()

router.get ("/" ,traerCreadores)
router.get ("/:id",traerUnCreador)
router.post ("/", crearCreador)
router.put ("/:id", actualizarCreador)
router.delete ("/id", borrarCreador) 

module.exports = router