<template>
<div>
       <nav class="navbar is-fixed-top is-danger" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item is-size-3-desktop" href="https://bulma.io">
      PETBoX
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"
    v-bind:class="{ 'is-active': showMobileMenu }"
    v-on:click="showMobileMenu = !showMobileMenu"
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu"
  v-bind:class="{ 'is-active': showMobileMenu }"
  >
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Channels
      </a>

       <a class="navbar-item">
        My Subscriptions
      </a>

    </div>

    <div class="navbar-end">
      <a class="navbar-item">
        My Profile
      </a>

       <a class="navbar-item">
        Sign out
      </a>
    </div>
  </div>
</nav>
<main class="column mx-4">
      <div class="level mar60">
        <div class="level-left">
          <div class="level-item">
            <div class="subtitle is-4">My Channels</div>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <button type="button" class="button is-small">
              SEE ALL >>
            </button>
          </div>
        </div>
      </div>
      <div class="columns is-multiline mb-6">
        <div class="column is-3">
          <div class="panel">
            <p class="panel-heading">
              Dog Updates
            </p>
            <div class="panel-block">
              <figure class="image is-16x9">
                <img src="https://placehold.it/1280x720">
              </figure>
            </div>
          </div>
        </div>
    
      </div>
      
      <div class="subtitle is-4">Channels You may Like</div>
      <div class="columns is-multiline">
          
        <div class="column" v-for="channel in channels" :key="channel.id">
          <div class="box has-background-danger">
            <div class="title is-6 has-text-white">{{channel.title}}</div>
            <div class="level">
              <div class="level-item">
                <div class="">
                  <div class="heading">Followers</div>
                  <div class="title is-5 has-text-white">{{channel.followers}}</div>
                </div>
              </div>
              <div class="level-item">
                <div class="">
                  <div class="heading">Topics</div>
                  <div class="title is-5 has-text-white">{{channel.topics}}</div>
                </div>
              </div>
              <div class="level-item">
                <div class="">
                  <div class="heading">follow</div>
                  <div class="title is-5 has-text-white">
                      +
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      
      <div class="columns">
        <div class="level">
          <div class="level-item">
            <button type="button" class="button is-small">
              SEE MORE >>
            </button>
          </div>
      </div>
      </div>
      
    </main>
</div>
</template>
<script>
export default {
 
    data() {
        return {
            showMobileMenu: false,
            channels: [
               {id: 1, title: "Cat Updates", followers: '25000', topics: "70"},
               {id: 2, title: "Fish Updates", followers: '4600', topics: "30"},
               {id: 3, title: "Horse Updates", followers: '79000', topics: "15"},
               {id: 4, title: "Parrot Updates", followers: '2300', topics: "41"},
               {id: 5, title: "Mouse Updates", followers: '2000', topics: "8"} 
            ],
            subscriptions: [
              {id:1, title: "Cat Updates"}
            ]
        }
        
    },
}
</script>