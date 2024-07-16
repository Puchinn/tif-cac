const db = require ("../data/db.js")

const {DataTypes} = require ("sequelize")

const UsuariosModel =db.define("usuarios",{
    nombreCompleto:{type:DataTypes.STRING},
    clave:{type:DataTypes.INTEGER},    
    })

module.exports = UsuariosModel