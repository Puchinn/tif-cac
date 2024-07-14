const express = require ("express")

const {traerFeedbacks,traerUnFeedback,crearFeedback,actualizarFeedback,borrarFeedback } = require ("../controllers/feedbackControllers.js")

const router = express.Router()

router.get ("/" ,traerFeedbacks)
router.get ("/:id",traerUnFeedback)
router.post ("/", crearFeedback)
router.put ("/:id", actualizarFeedback)
router.delete ("/id", borrarFeedback) 

module.exports = router