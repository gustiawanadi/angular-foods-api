const sequelize = require('sequelize')
const db = require('../config/db')

const potosmodel = db.define(
    'potos',
    {
        idFoods : {type:sequelize.STRING},
        path : {type:sequelize.STRING}
    }
)

module.exports = potosmodel