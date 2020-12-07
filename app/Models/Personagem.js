'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Personagem extends Model {
    quiz(){
        return this.belongsToMany('App/Models/Quiz')
    }
}

module.exports = Personagem
