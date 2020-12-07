'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuizSchema extends Schema {
  up () {
    this.create('quizzes', (table) => {
      table.increments()
      table.string('nome', 45).notNullable().unique()
      table
      .integer("idpersonagem")
      .unsigned()
      .references("id")
      .inTable("personagems")
      .onUpdate("cascade")
      .onDelete("cascade")
      .notNullable();
      table
      .integer("iduser")
      .unsigned()
      .references("id")
      .inTable("users")
      .onUpdate("cascade")
      .onDelete("cascade")
      .notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('quizzes')
  }
}

module.exports = QuizSchema
