const db = require ("../data/db.js")

const {DataTypes} = require ("sequelize")

const PaisesModel =db.define("paises",{
nombre:{type:DataTypes.STRING},
capital:{type:DataTypes.STRING},
poblacion:{type:DataTypes.INTEGER},
})                    

module.exports = PosteosModel
