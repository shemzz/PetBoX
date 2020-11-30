'use strict'
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

//user register
Route.post('/signup', 'UserController.signup')

//user login
Route.post('/login', 'UserController.login')

Route.group(() => {
  Route.get('/me', 'UserController.me')
  Route.put('/update_profile', 'UserController.updateProfile')
})
  .prefix('account')
  // .middleware(['auth:jwt'])

//show recommended channels to user
    Route.get('/channels_to_follow', 'ChannelController.channelsToFollow')

//follow a channel
Route.post('/channel/follow', 'ChannelController.follow')

// unfollow channel
Route.delete('/unfollow/:id', 'ChannelController.unFollow')

// create a post
Route.post('/post', 'PostController.post').middleware(['auth:jwt'])

// single post
Route.get('/posts/:id', 'PostController.show')

Route.get('/allchannels', 'ChannelController.all')