<template>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">    
     
    <router-link class="nav-link" to="/"> <h4  > Getaway Island </h4> </router-link>   

    <div  id="navbarNav">
      <ul class="navbar-nav"> 

        <!-- for logged OUT users -->        
        <li class="nav-item" v-if="!user" >         
          <router-link class="nav-link" to="/LogInPage">Sign In</router-link>
        </li>      
        <li class="nav-item">          
          <router-link class="nav-link" to="/CustomerDetails">Admin Login</router-link>       
        </li>

        <!-- for logged IN users -->
         <li class="nav-item" v-if="user">          
        <label for=""> <h6> Logged in as:</h6>{{ user.email}}</label>     
        </li>  
        <li class="nav-item" v-if="user">          
         <button @click="handleSignOut">Logout</button>     
        </li>          
      </ul>
    </div> 
    
  </div>
</nav>
</template>

<script setup>

//vue imports
import getUser from '../composables/getUser'

//firebase imports
import { auth } from '../firebase/config'
import { signOut } from 'firebase/auth'

const { user } = getUser()

//signout
const handleSignOut = () => {
  signOut(auth)
}

</script>

<style>
 h4 {
  font-family:Arial, Helvetica, sans-serif;
  color: blueviolet;
  
}


</style>
