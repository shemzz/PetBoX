'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Channel extends Model {
    posts() {
        return this.hasMany('App/Models/Post')
    }
    
    followers() {
      return this.belongsToMany(
        'App/Model/Channel',
        'channel_id'
        'follower_id',
      ).pivotTable('followers')
    }
}

module.exports = Channel
