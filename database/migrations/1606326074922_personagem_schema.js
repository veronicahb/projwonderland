'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PersonagemSchema extends Schema {
  up () {
    this.create('personagems', (table) => {
      table.increments()
      table.string('nome', 45).notNullable().unique()
      table.datetime('idade', 3).notNullable().unique()
      table.string('ator', 45).notNullable().unique()
      table.string('sobre', 100).notNullable().unique()
      table.string('imagem', 45).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('personagems')
  }
}

module.exports = PersonagemSchema
