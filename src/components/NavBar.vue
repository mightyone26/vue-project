<template>
  <ul>
    <!-- company logo link back to homepage -->
    <li > 
      <router-link 
       to="/"> <img class="logoNav" alt="logo" src="..\assets\Home\headlogo.png" > 
      </router-link>    
    </li>

    <li>
      <button v-if="adminLoggedIn" class="customerDetailsButton"  @click="handleCustomerDetails">Edit Customer Details</button>         
      <button  class="btnUser" type="button" data-bs-toggle="modal" data-bs-target="#createOrSigninModal">         
      <fa  class="btnUserIcon"  icon="user-circle" />         
      <p v-if="!user">Sign-In</p>
      <p class="displayUserEmail" v-if="user">{{ user.email}}</p>
      </button>
      <br>         

     <!-- Modal (Create, sign in, my account, logout modal) -->       
      <div class="modal fade" id="createOrSigninModal" tabindex="-1" aria-labelledby="createOrSigninModal" aria-hidden="true">
        <div class="modal-dialog modalUserLeft">
          <div class="modal-content">            
            <div class="modal-body">

              <!--Select Create account button-->
              <h6 v-if="!user">Sign in or create a new account.</h6>
              <h6 v-if="user"> Logged in as: {{ user.email}}</h6>              
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
                <label class="inputLabel">Email</label> 
                <input v-if="!user" v-model="formInfo.email" class="inputValue" type="email" placeholder="email" aria-describedby="email">
                <label v-if="!user" class="inputValue" ><small class="validateInput" v-for="error in v$.email.$errors" :key="error.$uid">Email address:  {{error.$message}}</small></label>  
                <br>     
                <br>
                <br>
                <label v-if="user">Your account has been created. Please make a booking. </label>
                
                <label v-if="!user" class="inputLabel">Password: &nbsp;</label>                            
                <input v-if="!user" class="inputValue" type="password" v-model="formInfo.password" placeholder="6 characters minimum" > 
                <label v-if="!user" class="inputValue" ><small class="validateInput" v-for="error in v$.password.$errors" :key="error.$uid">Password:  {{error.$message}}</small></label>  
                <br>          
                <br>
                <br>
                <label v-if="!user" class="inputLabel">Confirm Password: &nbsp;</label>                            
                <input v-if="!user" class="inputValue" type="password"  v-model="formInfo.confirmPassword" placeholder="6 characters minimum" > 
                <label v-if="!user" class="inputValue" ><small class="validateInput" v-for="error in v$.confirmPassword.$errors" :key="error.$uid">Confirm password:  {{error.$message}}</small></label>  
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
                <label v-if="!user" class="inputLabel">Email</label> 
                <input v-if="!user" class="inputValue" type="email" v-model="formInfo.email"  placeholder="email" aria-describedby="email">
                <label v-if="!user" class="inputValue" ><small class="validateInput" v-for="error in w$.email.$errors" :key="error.$uid">Email address:  {{error.$message}}</small></label>  
                <br>
                <label v-if="user"> <h5>You are logged in as {{ user.email }} </h5> </label>
                <br>
                <label v-if="!user" class="inputLabel">Password: &nbsp;</label>                            
                <input v-if="!user" class="inputValue" type="password" v-model="formInfo.password" placeholder="password" aria-describedby="password" > 
                <label v-if="!user" class="inputValue" ><small class="validateInput" v-for="error in w$.password.$errors" :key="error.$uid">Password:  {{error.$message}}</small></label>  
                <br>
                <br> 
                <br>                    
                <button v-if="!user" class="btnStyle"  aria-label="Log in">Login your account</button>
                <button v-if="user" class="btnStyle" type="button"  data-bs-dismiss="modal" aria-label="Close">Close</button>

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
  <hr>
</template>

<script setup>
 
//vue imports
import { ref, watch, reactive, computed } from 'vue'
import { useRouter } from 'vue-router';
import useSignup from '@/composables/useSignup'
import useLogin from '@/composables/useLogin'
import getUser from '@/composables/getUser'

//firebase imports
import { auth } from '@/firebase/config'
import { signOut } from 'firebase/auth'

//vuelidate imports
import useVuelidate from '@vuelidate/core'
import { required, email, sameAs, minLength } from '@vuelidate/validators'
 
  const { user } = getUser()  
  const { signup, error } = useSignup()
  const router = useRouter()

//valiate with vuelidate library
  const formInfo = reactive({
        email: '',
        password: '',
        confirmPassword: ''
        })

  const rule = {      //for signin validation
        email: { required, email },      
        password: {required, minLength: minLength(6)}
      }

  const rules = computed (() => {
        return {    //for create account validation
        email: { required, email },      
        password: {required, minLength: minLength(6)},
        confirmPassword: { sameAs: sameAs(formInfo.password)}      
        }
      })  
  
  const w$ = useVuelidate(rule, formInfo)
  const v$ = useVuelidate(rules, formInfo) 

//The 'adminlogged' variable toggles 'customer details' link button on nav bar for when admin is logged in. The
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
    const result = await v$.value.$validate()
    if(result){
    await signup(formInfo.email, formInfo.password)
      if(!error.value) { 
        //clears form once submitted          
          formInfo.email=''
          formInfo.password='' 
      }     
    }
  }
 
      //sign in user
 const { login, errorSignIn } = useLogin() 

  const handleSubmitSignIn = async () => {
    const result = await w$.value.$validate()
    if(result){  
    await login(formInfo.email, formInfo.password)  
    if(!errorSignIn.value) {
      
      if(formInfo.email === 'admin@admin.com') {        
       adminLoggedIn.value= true
      }       
        //clears form once submitted 
        formInfo.email=''
        formInfo.password=''        
    } 
   }
  }     

  //signout
  const handleSignOut = () => {    
   signOut(auth)
   
   //clears form once submitted 
   formInfo.email=''
   formInfo.password=''  
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
  height: 50px; 
  border: solid rgba(255, 0, 0, 0.155); 
  border-radius: 10px;
  border-width: 1px;
  transition-duration: 0.3s;
}
.logoNav:hover{
  border: solid rgba(255, 0, 0, 0.61) ;
  border-width: 1px;
}

ul {   
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  height: 90px;
  width: 100%;   
  font-family: 'Lexend Deca', sans-serif;
}
hr{
  color: rgba(0, 0, 0, 0.208);
}
input {
  width: 60%;
}
.customerDetailsButton { 
  margin-left: 25%;
  margin-top: 30px;
  border: solid 1px;
  border-radius: 10px;
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
  font-size: 80%;
}
.btnSigninOrCreate {
  border: none;  
  background: none;
  margin-right: 2%;
  margin-top: 1%;  
}
.btnUserIcon {  
  font-size:  46px;  
  color: rgb(112, 112, 112);  
  padding-bottom:3% ;
}
.inputLabel {
    float: left;
    margin-left: 2%;
}
.inputValue {
    float: right;
    margin-right: 5%;
}
.validateInput {
  color: red;
  font-size: small;  
}
@media only screen and (max-width: 768px) {
.customerDetailsButton {  
  margin-left: 20%;  
}
}
@media only screen and (max-width: 600px){
ul { 
  width: 100%;  
  height: 80%;
}
.customerDetailsButton {  
  margin:16% 0% 0% -30%;  
  float: left;
}
.displayUserEmail {
  display:none;
}
.btnUserIcon {  
  float: right;
  font-size:  46px;  
  color: rgb(112, 112, 112);  
  margin-top: -120%;
}
.btnUser { 
  color: rgb(0, 0, 0);
  float: right;
  border:none;
  background: none;
  margin: 17% 2% 0% 0%;  
}
}

</style>





