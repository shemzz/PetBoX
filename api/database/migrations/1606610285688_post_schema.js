'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostSchema extends Schema {
  up () {
    this.create('posts', (table) => {
      table.increments()
      table.integer('channel_id').unsigned().notNullable()
      table.text('post').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('posts')
  }
}

module.exports = PostSchema
