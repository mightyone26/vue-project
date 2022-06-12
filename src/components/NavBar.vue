<template>
  <ul>
    <li> <router-link  to="/"> <img alt="logo" src="src\assets\Home\headlogo.png" height="50"> </router-link> </li>    
    <li style="float:right"> <button v-if="user" @click="handleSignOut"> <h4> Logout</h4></button></li>  
    <li style="float:right"> <label v-if="user" > <h3> Logged in as: {{ user.email}}</h3></label></li>  
    <li style="float:left"> <router-link  v-if="!user"  to="/LogInPage"> <label for=""><h3>Sign In</h3></label>  </router-link></li>
    <li style="float:right"><fa icon="user" /></li>    
    <li>
      <!-- Button trigger modal for New User Sign ups-->
        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <p>Create an account</p> 
        </button>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div>
              <!-- <div>       
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div> -->
              <div class="modal-body">
                <div class="myCard">
                  <form @submit.prevent="handleSubmit">
                  <h4>Create an account</h4>
                  <br>
                  <label style="float:left">Email: &nbsp;</label>                
                  <input style="float:right" type="email" name="email" v-model="email" placeholder="Email address" required>                 
                  <br>
                  <br>
                  <label style="float:left">Password: &nbsp;</label>
                                
                  <input style="float:right" type="password" name="password" v-model="password" placeholder="Password" required> 
                  <br>
                  <br>
                  <button class="btnCreateAccount"  data-bs-dismiss="modal" aria-label="Close">Create an account</button>
                  <div v-if="error">{{ error }}</div>
                  </form>  
                </div>
                
              </div>      
            </div>
          </div>
        </div>
    </li>

  </ul>

</template>

<script setup>

//vue imports
import getUser from '@/composables/getUser'
//(new user sign up imports)
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import useSignup from '../composables/useSignup'

//firebase imports
import { auth } from '@/firebase/config'
import { signOut } from 'firebase/auth'

const { user } = getUser()

//signout
const handleSignOut = () => {
  signOut(auth)
}
//new user sign up
    const email = ref('')
    const password = ref('')

    const { signup, error } = useSignup()
    const router = useRouter()

    const handleSubmit = async () => {
        await signup(email.value, password.value)
        if(!error.value) {           
            email.value=''
            password.value=''
        }
    }
 
</script>

<style scoped>
ul {   
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: rgb(48, 48, 48);
}
li { 
  float: left;
  color: white;  
  text-align: center;
  padding: 0.5% 0.5%;
}
h3 {
  color: aliceblue;
  font-family:Arial, Helvetica, sans-serif;
}
.myCard {  
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;  
  width: 50%;
  height: 100%;  
  font-family:Arial, Helvetica, sans-serif;
  font-size: 120%;
  padding: 2% 8%; 
  margin-left: 25%;  
  color: black;
  background-color: rgb(255, 255, 255);
  border-radius: 20px; 
}
.btnCreateAccount {
  background-color: rgb(109, 211, 13);
  border: none;
  border-radius: 10px;
}

</style>





