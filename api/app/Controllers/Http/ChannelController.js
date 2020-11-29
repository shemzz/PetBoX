'use strict'
const User = use('App/Models/User')
const Channel = use('App/Models/Channel')

class ChannelController {
    async channelsToFollow({params, auth, response}) {
        //get currently authenticated user
        const user = auth.current.user
        
        //get the IDs of channels the logged in user is already following
        const channelsAlreadyFollowing = await channel.following().ids()
        
        //fetch channels the logged in user is not already following
        const channelsToFollow = await Channel.query()
        .whereNot('id', channel.id)
        .whereNotIn('id', channelsAlreadyFollowing)
        .pick(2)
        
        return response.json({
            status: 'success',
            data: channelsToFollow
        })
        
    }
    
    async follow ({ request, auth, response}) {
        //get logged in user
        const user = auth.current.user
        
        //add user to channel's following
        await channel.following().attach(user)
         
         return response.json({
             status: 'success',
             data: null
         })
        
        //
    }
    
    //unfollow a chennel
    async unFollow ({ params, auth, response }) {
    // get currently authenticated user
    const user = auth.current.user

    // remove from user's followers
    await channel.following().detach(params.id)

    return response.json({
        status: 'success',
        data: null
    })
}
}

module.exports = ChannelController
