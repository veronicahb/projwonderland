'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlternativaSchema extends Schema {
  up () {
    this.create('alternativas', (table) => {
      table.increments()
      table.string('gabarito', 45).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('alternativas')
  }
}

module.exports = AlternativaSchema
