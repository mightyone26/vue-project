<template>
  <ul>
    <li class="logoNav"> <router-link  to="/"> <img alt="logo" src="src\assets\Home\headlogo.png" height="50"> </router-link> </li>      
     <!-- displays on navbar when a user is signed in   -->
    <li><button class="btnLogout" v-if="user" @click="handleSignOut"> <h5> Logout</h5></button></li>    
    <li class="liLogStatus" v-if="user"> Logged in as: {{ user.email}}</li>    
    <li>      
       <!-- User Icon button only displays on navbar when a user is not signed in -->
        <button button v-if="!user" class="btnUser" type="button" data-bs-toggle="modal" data-bs-target="#createOrSigninModal">
        <fa  class="btnUserIcon"  icon="user-circle" />
        </button>

         <!-- Modal (Create or sign in modal) -->
       
           <div class="modal fade" id="createOrSigninModal" tabindex="-1" aria-labelledby="createOrSigninModal" aria-hidden="true">
            <div class="modal-dialog modalUserLeft">
             <div class="modal-content">            
              <div class="modal-body">

                 <!--Select Create account button-->
                 <h5>Sign in or create a new account.</h5>
                 <hr>
                <button class="btnSigninOrCreate" type="button" data-bs-toggle="modal" data-bs-target="#createAccountModal">
                <p>Create account</p>
                </button>
                <br>
                 <!--Select Sign In button-->
                 <button class="btnSigninOrCreate" type="button" data-bs-toggle="modal" data-bs-target="#signInModal">
                <p>Sign in</p>
                </button>  
             </div>      
            </div>
          </div>
        </div>       

        <!-- Modal (create account)-->
        <div class="modal fade" id="createAccountModal" tabindex="-1" aria-labelledby="createAccountModal" aria-hidden="true">
          <div class="modal-dialog ">
            <div class="modal-content" >              
              <div class="modal-body">
                
                  <form @submit.prevent="handleSubmitCreateAccount" >
                  <h4>Create an account</h4>
                  <hr>
                  <br>
                  <label style="float:left">Email: &nbsp;</label>                
                  <input style="float:right" type="email" name="email" v-model="email" placeholder="email address" required>                 
                  <br>
                  <br>
                  <label style="float:left">Password: &nbsp;</label>
                                
                  <input style="float:right" type="password" name="password" v-model="password" placeholder="Password" required> 
                  <br>
                  <br>
                 
                  <button class="btnCreateAccount"  data-bs-dismiss="modal" aria-label="Close">Create account</button>
                  <div v-if="error">{{ error }}</div>

                  <button style="float:right"  class="btnPrivacy" data-bs-toggle="modal" data-bs-target="#privacyStatement">
                      Our Privacy Statement
                  </button>
                  </form> 

              </div>      
            </div>
          </div>
        </div>

        <!-- Modal (Sign In)-->
        <div class="modal fade" id="signInModal" tabindex="-1" aria-labelledby="createAccountModal" aria-hidden="true">
          <div class="modal-dialog ">
            <div class="modal-content">              
              <div class="modal-body">
                
                 <form @submit.prevent="handleSubmitSignIn">
                    <h2>Login</h2>
                    <br>
                    <label style="float:left">Email:</label>
                    <input style="float:right" type="email" name="email" v-model="email" placeholder="email" required> &nbsp;
                      <br>
                      <br>
                    <label style="float:left">Password:</label>
                    <input style="float:right" type="password" name="password" v-model="password" placeholder="Password" required> &nbsp;
                     <br>
                     <br>
                    <button class="btnLogin"  data-bs-dismiss="modal" aria-label="Close">Login your account</button>
                    <div v-if="error">{{error}}</div>                    
                </form>
                
              </div>      
            </div>
          </div>
        </div>    
       
        <!-- Modal -->
          <div class="modal fade" id="privacyStatement" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Privacy Statement</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <p>We collect personal information from you, including information about your:</p>
                  <p>Contact information e.g., phone numbers, first name, last name, email, address, date of birth, billing information, purchase information.</p>
                  <p>We collect your personal information in order to, provide you with more information about our service and inform you of upcoming promotions.
                    Besides our staff, we share this information with our head office in order to provide you with other products within our company. 
                    Providing some information is optional. If you choose not to enter your personal details, we will not be able to make a booking.
                    We keep your information safe by encryption and only accessible by management .
                    You have the right to ask for a copy of any personal information we hold about you, and to ask for it to be corrected if you think it is wrong.
                    We adhere to the privacy laws set out by the EU General Data Protection Regulation service.</p>
                  <p>If you’d like to ask for a copy of your information, or to have it corrected, please contact us at oceanview@bnb.com, 
                    phone on 123456 or write to us at 1 Nowhere Street, Nowhere Ville.</p> 
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>                  
                </div>
              </div>
            </div>
          </div>
    </li>

  </ul>

</template>

<script setup>

//vue imports
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import useSignup from '@/composables/useSignup'
import useLogin from '@/composables/useLogin'
import getUser from '@/composables/getUser'

//firebase imports
import { auth } from '@/firebase/config'
import { signOut } from 'firebase/auth'

    //new user sign up (create account)
    const { user } = getUser()
    const email = ref('')
    const password = ref('')

    const { signup, error } = useSignup()
    const router = useRouter()

    const handleSubmitCreateAccount = async () => {
        await signup(email.value, password.value)
        if(!error.value) { 
          //clears form once submitted          
            email.value=''
            password.value=''            
        }
    }
    //sign in user
     const { login} = useLogin()

    const handleSubmitSignIn = async () => {
        await login(email.value, password.value)

        if(!error.value) {
           //clears form once submitted 
            email.value=''
            password.value='' 
        }
    }

    //signout
    const handleSignOut = () => {
      signOut(auth)
    }
 
</script>

<style scoped>
.modalUserLeft { 
  width:450px;
  height: 250px;
  left: 35%;
  top: 6%; 
}
.modal-content {
  width: 100%;
  height: 100%;  
  font-family:Arial, Helvetica, sans-serif;
  font-size: 120%;  
  color: black;
  background-color: rgb(255, 255, 255);
  border-radius: 10px; 
}
.logoNav {   
  float: left;
  margin-left: 2%;
  margin-top: 1%; 
}
ul {   
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: rgb(48, 48, 48);
  height: 120%;
}
input {
  width: 60%;
}
.btnCreateAccount {
  background-color: rgba(251, 59, 59, 0.785);
  border: none;
  border-radius: 10px;
}
.btnPrivacy {
  background-color: rgb(146, 189, 255);
  border: none;
  border-radius: 10px;
}
.btnLogin {
  background-color: rgb(59, 147, 163);
  border: none;
  border-radius: 10px;  
}
.btnUser { 
  float: right;
  border: navajowhite;
  background: none;
  margin-right: 2%;
  margin-top: 1%;  
}
.btnSigninOrCreate {
  border: none;  
  background: none;
  margin-right: 2%;
  margin-top: 1%;  
}
.btnLogout {
  float: right;
  background-color: rgb(151, 204, 237);
  border:none;
  float:right;  
  border: none;
  border-radius: 50px;
  margin-right: 2%;
  margin-top: 1%;

}
.liLogStatus {
  color: white;
  float:right;
  margin-right: 2%;
  margin-top: 1.5%;
}
.btnUserIcon {  
  font-size:  46px;
  color: rgb(199, 227, 135);
}

</style>





