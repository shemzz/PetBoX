<template>
 <div id="login">
        <div class="login-card">
      
          <div class="card-title">
            <h1>PetBox Sign In</h1>
          </div>
      
          <div class="content">
            <form method="POST" action="#">
      
              <input id="email" type="email" name="email" title="email" placeholder="Email" required autofocus>
              <input id="password" type="password" name="password" title="password" placeholder="Password" required>
      
              <div class="level options">
                <div class="checkbox level-left">
                  <input type="checkbox" id="checkbox" class="regular-checkbox">
                  <label for="checkbox"></label>
                  <span>Remember me</span>
                </div>
      
                <nuxt-link class="btn btn-link level-right" to="#"><span class="is-danger">Forgot Password?</span></nuxt-link>
              </div>
      
              <button type="submit" class="btn btn-danger">Login</button>
            </form> <br>
            <small>Don't have an account? <nuxt-link to="register">Register here</nuxt-link></small>
          </div>
        </div>
      </div>
</template>

