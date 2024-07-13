const db = require ("../data/db.js")

const {DataTypes} = require ("sequelize")

const FeedBackModel =db.define("paises",{
    usuario_id:{type:DataTypes.INTEGER},
    contenido:{type:DataTypes.STRING},    
    })                

module.exports = PosteosModel