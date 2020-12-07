'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Quiz extends Model {
    user(){
        return this.belongsTo("App/Models/User")
    }
    personagem(){
        return this.belongsTo("App/Models/Personagem")
    }
    questao(){
        return this.belongsToMany('App/Models/Questao')
    }
}

module.exports = Quiz
