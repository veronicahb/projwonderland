'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuestaoSchema extends Schema {
  up () {
    this.create('questaos', (table) => {
      table.increments()
      table.string('pergunta', 45).notNullable().unique()
      table
      .integer("idalternativa")
      .unsigned()
      .references("id")
      .inTable("alternativas")
      .onUpdate("cascade")
      .onDelete("cascade")
      .notNullable();
      table
      .integer("idquiz")
      .unsigned()
      .references("id")
      .inTable("quizzes")
      .onUpdate("cascade")
      .onDelete("cascade")
      .notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('questaos')
  }
}

module.exports = QuestaoSchema
