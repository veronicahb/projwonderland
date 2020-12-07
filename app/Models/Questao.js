'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Questao extends Model {
    alternativa(){
        return this.hasOne("App/Models/Alternativa")
    }
    quiz(){
        return this.belongsTo("App/Models/Quiz")
    }
}

module.exports = Questao
