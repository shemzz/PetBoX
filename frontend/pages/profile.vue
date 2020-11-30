<template>
 <section class="section">
 <div class="container">
 <h2 class="title">My Profile</h2>
 <!-- <div class="content">
 <p>
 <strong>Username:</strong>
 {{ loggedInUser.name }}
 </p>
 <p>
 <strong>Email:</strong>
 {{ loggedInUser.email }}
 </p>
 </div> -->
 <div class="columns">
   <div class="column is-danger">
     <nuxt-link to="/login">login</nuxt-link>
   </div>
<div class="column is-info">
     <nuxt-link to="/register">Register</nuxt-link>
   </div>
   <div class="column is-primary">
     <nuxt-link to="/dashboard">Dashboard</nuxt-link>
   </div>
    </div>
 </div>
 </section>
</template>