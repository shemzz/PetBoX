<template>
    <div id="login">
        <div class="login-card">
      
          <div class="card-title">
            <h1>PetBox Sign up</h1>
          </div>
      
          <div class="content">
            <form method="POST" action="#">
              <input id="username" type="text" name="username" title="username" placeholder="Username" required autofocus>
              <input id="email" type="email" name="email" title="email" placeholder="Email" required autofocus>
              <input id="password" type="password" name="password" title="password" placeholder="Password" required>
              <input id="confirmpassword" type="password" title="password" placeholder="Confirm Password" required>

              
              <div class="level options">
                <div class="checkbox level-left">
                  <input type="checkbox" id="checkbox" class="regular-checkbox">
                  <label for="checkbox"></label>
                  <span>I accept <nuxt-link to="#">terms & conditions</nuxt-link></span>
                </div>
      
              </div>
      
              <button type="submit" class="btn btn-danger">Register</button>
            </form> <br>
            <small>Already have an account? <nuxt-link to="/">Login here</nuxt-link></small>
          </div>
        </div>
      </div>
</template>