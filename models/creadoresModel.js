const db = require ("../data/db.js")

const {DataTypes} = require ("sequelize")

const CreadoresModel =db.define("creadores",{
    nombreCompleto:{type:DataTypes.STRING},
    acerca:{type:DataTypes.STRING},
    webLink:{type:DataTypes.STRING},
    })            

module.exports = CreadoresModel