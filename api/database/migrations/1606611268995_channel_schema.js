'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChannelSchema extends Schema {
  up () {
    this.create('channels', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('channels')
  }
}

module.exports = ChannelSchema
