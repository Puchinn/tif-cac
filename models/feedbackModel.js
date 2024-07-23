const db = require ("../data/db.js")

const {DataTypes} = require ("sequelize")

const FeedBackModel =db.define("feedbacks",{
    nombre:{type:DataTypes.STRING},
    apellido:{type:DataTypes.STRING},
    correo:{type:DataTypes.STRING},
    mensaje:{type:DataTypes.STRING},    
    })                

module.exports = FeedBackModel