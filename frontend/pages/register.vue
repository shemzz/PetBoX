<template>
  <div id="login">
    <div class="login-card">
      <div class="card-title">
        <h1>PetBox Sign up</h1>        
      </div>

      <div class="content">
        <form method="POST" @submit.prevent="signup">
          <input
            id="username"
            type="text"
            name="username"
            v-model="username"
            title="username"
            placeholder="Username"
          />
          <!-- <span v-show="errors.has('username')" class="is-danger">{{ errors.first('username') }}</span> -->

          <input
            id="email"
            type="email"
            name="email"
            v-model="email"
            title="email"
            placeholder="Email"
            autofocus
          />
          <!-- <span v-show="errors.has('email')" class="is-danger">{{ errors.first('email') }}</span> -->

          <input
            id="password"
            type="password"
            v-model="password"
            name="password"
            title="password"
            placeholder="Password"
          />
          <!-- <span v-show="errors.has('password')" class="is-danger">{{ errors.first('password') }}</span> -->

          <input
            id="confirmpassword"
            type="password"
            title="password"
            placeholder="Confirm Password"
          />
          <!-- <span v-show="errors.has('password')" class="is-danger">{{ errors.first('password') }}</span> -->

          <div class="level options">
            <div class="checkbox level-left">
              <input type="checkbox" id="checkbox" class="regular-checkbox" />
              <label for="checkbox"></label>
              <span
                >I accept <nuxt-link to="#">terms & conditions</nuxt-link></span
              >
            </div>
          </div>

          <button type="submit" class="btn btn-danger">Register</button>
        </form>
        <br />
        <small
          >Already have an account?
          <nuxt-link to="/">Login here</nuxt-link></small
        >
      </div>
    </div>
  </div>
</template>

<script>

    export default {
        name: 'SignUpForm',

        data() {
          return {
            username: '',
                email: '',
                password: '',
            };
        },
      
        methods: {
            async signup() {
                try {
        let data = {
          username: this.username,
          email: this.email,
          password: this.password,
        };
        //send request to server
        let response = await this.$axios.$post("signup", data);

// use anuxt auth module
        if (response.success) {
          this.$auth.loginWith("local", {
            data: {
              email: this.email,
              password: this.password
            }

          }).then(()=>
          this.$router.push("/dashboard"));
        }  
      } catch (err) {
        console.log(err);
      }

    }
        }
    };
</script>