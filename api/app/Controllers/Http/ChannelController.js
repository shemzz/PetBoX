'use strict'
const User = use('App/Models/User')
const Channel = use('App/Models/Channel')
const Post = use('App/Models/Post')


class ChannelController {
    async channelsToFollow({params, auth, response}) {
        //get currently authenticated user
        // const user = auth.current.user
        
        //get the IDs of channels the logged in user is already following
        // const channelsAlreadyFollowing = await user.following().ids()
        const channelsAlreadyFollowing = [3]
        
        //fetch channels the logged in user is not already following
        const channelsToFollow = await Channel.query()
        // .whereNot('id', channel.id)
        .whereNotIn('id', channelsAlreadyFollowing)
        .pick(5)
        
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

async timeline ({ auth, response }) {
    const user = await User.find(auth.current.user.id)

    // get an array of IDs of the user's followers
    const followingChannelsIds = await channel.following().ids()

    const posts = await Post.query()
        .whereIn('channel_id', followingChannelsIds)
        .with('comments')
        .fetch()

    return response.json({
        status: 'success',
        data: posts
    })
}

async all({response}) {
    const allchannels = await Channel.query().fetch()

    return response.json({
        status: 'success',
        data: allchannels
    })
}

}

module.exports = ChannelController
