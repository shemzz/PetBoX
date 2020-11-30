'use strict'
const User = use('App/Models/User')

class UserController {
async signup ({request, auth, response}) {
    const userData = request.only(['username', 'email', 'password'])
        
    try {
        // save user to database
        const user = await User.create(userData)
        // generate JWT token for user
        let token = await auth.generate(user)

        Object.assign(user, token)

        // return response.json(user)

        return response.json({
            success: true,
            data: user
        })
    } catch (error) {
        return response.status(400).json({
            status: 'error',
            message: 'There was a problem creating the user, please try again later.'
        })
    }
}

    async login ({ request, auth, response}) {
        // let {email, password} = request.token();

        try {
            const token = await auth.attempt(
                request.input('email'),
                request.input('password')
            )
            return response.json(token)
      
        }
        catch (e) {
          console.log(e)
          return response.json({message: 'You are not registered!'})
        }
    }

    async me ({ auth, response}) {
        const user = await User.query()
            // .where('id', auth.current.user.id)
            .firstOrFail()
    
        return response.json(user)
    }

    async updateProfile ({ request, auth, response }) {
        try {
            // get currently authenticated user
            const user = auth.current.user
    
            // update with new data entered
            user.username = request.input('username')
            user.email = request.input('email')
    
            await user.save()
    
            return response.json({
                status: 'success',
                message: 'Profile updated!',
                data: user
            })
        } catch (error) {
            return response.status(400).json({
                status: 'error',
                message: 'There was a problem updating profile, please try again later.'
            })
        }
    }

}

module.exports = UserController
