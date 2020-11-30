<template>
  <div>
    <nav
      class="navbar is-fixed-top is-danger"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <nuxt-link class="navbar-item is-size-3-desktop" to="/">
          PETBoX
        </nuxt-link>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          v-bind:class="{ 'is-active': showMobileMenu }"
          v-on:click="showMobileMenu = !showMobileMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        v-bind:class="{ 'is-active': showMobileMenu }"
      >
        <div class="navbar-start">
          <a class="navbar-item"> Home </a>

          <a class="navbar-item"> Channels </a>

          <a class="navbar-item"> My Channel Subscriptions </a>
        </div>

        <div class="navbar-end" v-if="$auth.loggedIn">
          <a class="navbar-item">
            {{ $auth.user.email }}
          </a>

          <a class="navbar-item"> Sign out </a>
        </div>
        <div class="navbar-end" v-else>
          <a class="navbar-item"> My Profile </a>

          <a class="navbar-item"> Sign out </a>
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
            <button type="button" class="button is-small" v-if="(subscriptions.length > 4)">SEE ALL >></button>
          </div>
        </div>
      </div>
      <div class="columns is-multiline mb-6">
        <div class="column is-3" v-for="sub in subscriptions.slice(0, 4)" :key="sub.id">
          <div class="panel">
            <p class="panel-heading">{{sub.name}}</p>
            <div class="panel-block">
              <figure class="image is-16x9">
                <img src="https://placehold.it/1280x720" />
              </figure>
            </div>
          </div>
        </div>
      </div>

      <div class="subtitle is-4">Channels You may Like</div>
      <div class="columns is-multiline">
        <div
          class="column is-2"
          v-for="channel in channels.slice(0, 6)"
          :key="channel.id"
        >
          <div class="box has-background-danger">
            <div class="title is-6 has-text-white">
              <nuxt-link :to="`/${whiteSpace(channel.name)}`">
                {{ channel.name }}</nuxt-link
              >
            </div>
            <div class="level">
              <div class="level-item">
                <div class="">
                  <div class="heading">Followers</div>
                  <div class="title is-5 has-text-white">
                    {{ channel.followers }}
                  </div>
                </div>
              </div>
              <div class="level-item">
                <div class="">
                  <div class="heading">Topics</div>
                  <div class="title is-5 has-text-white">
                    {{ channel.topics }}
                  </div>
                </div>
              </div>
              <div class="level-item">
                <div class="">
                  <div class="heading">follow</div>
                  <div
                    class="title is-5 has-text-white"
                    @click="followChannel(channel.id, channel.name, channel.topics, channel.followers)"
                  >
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
            
            <button type="button" class="button is-small" v-if="(channels.length < 5)">SEE MORE >></button>
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
        { id: 1, name: 'Cat Updates', followers: '25000', topics: '70' },
        { id: 2, name: 'Fish Updates', followers: '4600', topics: '30' },
        { id: 3, name: 'Horse Updates', followers: '79000', topics: '15' },
        { id: 4, name: 'Parrot Updates', followers: '2300', topics: '41' },
        { id: 5, name: 'Mouse Updates', followers: '2000', topics: '8' },
      ],
      subscriptions: [{ id: 1, name: 'Dog Updates' }],
    }
  },
  // :::: Fetch from Live server::::

  // async asyncData({ $axios }) {
  //   try {
  //     let response = await $axios.$get('channels_to_follow')
  //     return {
  //       channels_to_follow: response.data,
  //     }
  //   } catch (err) {
  //     console.log(err)
  //   }
  // },

  methods: {
    whiteSpace: function (a) {
      return a.toLowerCase().replace(/\s/g, '')
    },

   followChannel(theId, theName, theTopics, theFollowers){
      const apps = this.channels
      
//set item with click
const itemToBeRemoved = {id:theId, name:theName, followers: theFollowers, topics: theTopics}
//add to the list of subscribed channels
this.subscriptions.unshift({id: theId, name: theName, topics:theTopics, followers:theFollowers})

//the subscribed channel from list of recommended channels
apps.splice(apps.findIndex(a => a.id === itemToBeRemoved.id) , 1)

   }
  },
}
</script>