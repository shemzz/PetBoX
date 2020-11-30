'use strict'
const Post = use('App/Models/Post')

class PostController {
async post ({ request, auth, response }) {
    // get currently authenticated user
    const user = auth.current.user

    // Save post to database
    const post = await Post.create({
        user_id: user.id,
        post: request.input('post')
    })

    // fetch post's relations
    await post.loadMany(['channel','comment'])

    return response.json({
        status: 'success',
        message: 'posted successfully!',
        data: post
    })
}

// show single post
async show ({ params, response }) {
    try {
        const post = await Post.query()
            .where('id', params.id)
            .with('user')
            .with('comment')
            .with('comment.user')
            .firstOrFail()

        return response.json({
            status: 'success',
            data: post
        })
    } catch (error) {
        return response.status(404).json({
            status: 'error',
            message: 'Post not found'
        })
    }
}
}

module.exports = PostController
