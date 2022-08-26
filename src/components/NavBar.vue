<template>
  <ul>
    <!-- company logo link back to homepage -->
    <li class="logoNav"> 
      <router-link 
       to="/"> <img alt="logo" src="..\assets\Home\headlogo.png" height="50"> 
      </router-link>    
    </li>

    <li>
      <button v-if="adminLoggedIn" class="customerDetailsButton"  @click="handleCustomerDetails">View or Edit Customer Details</button>         
      <button  class="btnUser" type="button" data-bs-toggle="modal" data-bs-target="#createOrSigninModal">         
      <fa  class="btnUserIcon"  icon="user-circle" />         
      <p v-if="!user">Sign-In</p>
      <p v-if="user">{{ user.email}}</p>
      </button>
      <br>         

     <!-- Modal (Create, sign in, my account, logout modal) -->       
      <div class="modal fade" id="createOrSigninModal" tabindex="-1" aria-labelledby="createOrSigninModal" aria-hidden="true">
        <div class="modal-dialog modalUserLeft">
          <div class="modal-content">            
            <div class="modal-body">

              <!--Select Create account button-->
              <h5 v-if="!user">Sign in or create a new account.</h5>
              <h5 v-if="user"> Logged in as: {{ user.email}}</h5>              
              <hr>
              <button v-if="!user" class="btnSigninOrCreate" type="button" data-bs-toggle="modal" data-bs-target="#createAccountModal">
              <p>Create account</p>
              </button>       
              <button v-if="user" class="btnSigninOrCreate" type="button" data-bs-toggle="modal" data-bs-dismiss="modal" @click="handleMyAccount" >
              <p>My Account</p>
              </button> 
              <br>
                <!--Select Sign In/out button-->
              <button v-if="!user" class="btnSigninOrCreate" type="button" data-bs-toggle="modal" data-bs-target="#signInModal">
              <p>Sign in</p>
              </button>
              <button v-if="user" class="btnSigninOrCreate"   @click=" handleSignOut" data-bs-dismiss="modal">              

              <p>Logout</p>
              </button>  
          
            </div>      
          </div>
        </div>
      </div>       

      <!-- Modal (create account)-->      
       <div class="modal fade" id="createAccountModal" tabindex="-1" aria-labelledby="createAccountModal" aria-hidden="true" >
        <div  class="modal-dialog">
          <div class="modal-content" >
            <div class="modal-header">
              <h4 v-if="!user" class="modal-title">Create an account</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>             
              <div class="modal-body">
                
                <form @submit.prevent="handleSubmitCreateAccount" >
                <br>
                <label v-if="user">Your account has been created. Please make a booking. </label>
                <label v-if="!user" style="float:left">Email: &nbsp;</label>                
                <input v-if="!user" style="float:right" type="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" v-model="email" placeholder="e.g. example@email.com"   required>               
                <br>              
                <br>
                <label v-if="!user" style="float:left">Password: &nbsp;</label>                            
                <input v-if="!user" style="float:right" type="password" name="password" v-model="password" placeholder="6 characters minimum" required> 
                <br>
                <br>
                <div v-if="error">{{ error }}</div>
                <br>
                <br>             
                <button v-if="!user" class="btnStyle" style="float:right" aria-label="Create Account">Create account</button> 
                <button style="float:left"  class="btnStyle" data-bs-toggle="modal" data-bs-target="#privacyStatement">Our Privacy Statement</button>              
                </form>              

              </div>      
          </div>
        </div>
      </div>
      
      <!-- Modal (Sign In)-->
      <div class="modal fade" id="signInModal" tabindex="-1" aria-labelledby="createAccountModal" aria-hidden="true">
        <div class="modal-dialog ">
          <div class="modal-content">
            <div class="modal-header">
            <h4 v-if="!user" class="modal-title">Login</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>               
            <div class="modal-body">
              
              <form @submit.prevent="handleSubmitSignIn">
                <br>
                <label v-if="!user" style="float:left">Email:</label>
                <input v-if="!user" style="float:right" type="email" name="email" v-model="email" placeholder="email" required> &nbsp;
                <br>
                <label v-if="user"> <h5>You are logged in as {{ user.email }} </h5> </label>
                <br>
                <label v-if="!user" style="float:left">Password:</label>
                <input v-if="!user" style="float:right" type="password" name="password" v-model="password" placeholder="Password" required> &nbsp;
                <br>
                <br>                    
                <button v-if="!user" class="btnStyle"  aria-label="Log in">Login your account</button>
                <br>
                <br>                          
                <p v-if="errorSignIn" style="color:red">Email or password incorrect. Please try again.</p>
              </form>
              
            </div>      
          </div>
        </div>
      </div>    
      
      <!-- Modal for privacy Statement -->
        <div class="modal fade" id="privacyStatement" tabindex="-1" aria-labelledby="privacyStatement" aria-hidden="true">
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
                <button type="button" class="btnStyle" data-bs-dismiss="modal">Close</button>                  
              </div>
            </div>
          </div>
        </div>
    </li>
  
  </ul>

</template>

<script setup>
 
//vue imports
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router';
import useSignup from '@/composables/useSignup'
import useLogin from '@/composables/useLogin'
import getUser from '@/composables/getUser'

//firebase imports
import { auth } from '@/firebase/config'
import { signOut } from 'firebase/auth'
 
  const { user } = getUser()
  const email = ref('')
  const password = ref('')
  const { signup, error } = useSignup()
  const router = useRouter()

//toggle customer details link on nav bar for when admin is logged in. The
//watch function imported from vue updates the value of adminLogged to false so that the 
//DOM button element 'View or Edit Customer Details' disappears when admin logs out 
  let adminLoggedIn = ref()  
    
    if(user.value){
      if(user.value.email === 'admin@admin.com') {
        adminLoggedIn.value= true
      }  
    }
  
  watch(user, () => {
    if(user.value === null){
      adminLoggedIn.value = false 
    }
  })
   //create user
  const handleSubmitCreateAccount = async () => {
      await signup(email.value, password.value)
      if(!error.value) { 
        //clears form once submitted          
          email.value=''
          password.value='' 
      }      
  }

     //sign in user
 const { login, errorSignIn } = useLogin() 

  const handleSubmitSignIn = async () => {    
    await login(email.value, password.value)  
    if(!errorSignIn.value) {
      
      if(email.value === 'admin@admin.com') {        
       adminLoggedIn.value= true
      }       
        //clears form once submitted 
        email.value=''
        password.value=''       
    }}   
 
  //signout
  const handleSignOut = () => {    
   signOut(auth)
   router.push('/')                    
  } 
  //pushes to customers account
  const handleMyAccount = () => {
    router.push('/UserAccount')      
  } 
//pushes to all customers for (CRUD) for admin user
  const handleCustomerDetails = () => {
    router.push('/CustomerDetails')
  }
      
</script>

<style scoped>
.modalUserLeft { 
  width:450px;
  height: 200px;
  left: 35%;
  top: 6%; 
}
.modal-content {
  width: 100%;
  height: 100%;  
  font-family:Arial, Helvetica, sans-serif;
  font-size: 100%;  
  color: black;
  background-color: rgb(255, 255, 255);
  border-radius: 5px; 
}
.logoNav {   
  float: left;
  margin-left: 1%;
  margin-top: 1%; 
  margin-bottom: 1%;  
}
ul {   
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  height: 100px;
  width: 100%;
  box-shadow: 1px 1px 5px 1px rgba(116, 116, 116, 0.034); 
}
input {
  width: 60%;
}
.customerDetailsButton {
  float: left;
  margin-left: 30%;
  margin-top: 30px;
  border: solid 1px;
  border-radius: 3px;
  border-color: rgb(0, 0, 0);
  background-color: rgb(255, 255, 255);
}
.btnStyle {
  background-color: rgb(255, 255, 255);
  border: solid 1px;
  border-radius: 3px;
}
.btnUser { 
  color: rgb(0, 0, 0);
  float: right;
  border:none;
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

.liLogStatus {
  text-decoration: none;
  color: white;
  float:right;
  margin-right: 2%;
  margin-top: 1.5%;
 
}
.btnUserIcon {  
  font-size:  46px;  
  color: rgb(112, 112, 112);  
  padding-bottom:3% ;
}
@media only screen and (max-width: 600px){
ul {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 100%;  
  height: 80%;
}
}

</style>





