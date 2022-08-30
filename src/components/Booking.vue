<template>

  <div class="myCard" >
    <h3>Make a Booking</h3>  
    <br>  
    <!-- Calendar -->
    <v-date-picker v-model="dateRange" is-range :model-config="modelConfig"  color="blue" :disabled-dates= "Adisabledates" :columns="$screens({ default: 1, lg: 2 })" is-expanded  />
   
   <!-- Checkin and checkout  options  -->
    <div>     
      <br>  
      <label > <b>Check-in:</b> </label>
      <label class="inputValue"> {{ dateRange.start }}</label>  
      <br><br>     
      <label> <b>Checkout:</b></label>
      <label class="inputValue">{{ dateRange.end }}</label> 
      <br><br>    
      <label v-if="daysBooked()">Booked for <b v-if="daysBooked()">{{ daysBooked() }}</b> {{ dayQty() }}</label>
      <label v-if="!daysBooked()">Booked for</label> 
      <br><br>         
    </div>    
     
    <div>
      <label> Adult Guests ($50 per day) </label> 
      <div class="inputValue">        
        <button class="btnAddGuest" :disabled="counterAdults === 0" @click="decreaseCountAdults"> <fa icon="circle-minus" /></button>
        &nbsp; <span >{{ counterAdults }}</span> &nbsp;
        <button class="btnAddGuest" :disabled="counterAdults === 6" @click="increaseCountAdults"><fa icon="circle-plus" /></button>
      </div>
    </div>   
    <hr>
    <div>
    <label> Under 18 yrs ($25 per day)  </label> 
      <div class="inputValue">
      <button class="btnAddGuest" :disabled="counterKids === 0" @click="decreaseCountKids"> <fa icon="circle-minus" /></button>
      &nbsp; <span >{{ counterKids }}</span> &nbsp;
      <button class="btnAddGuest" :disabled="counterKids === 6" @click="increaseCountKids"> <fa icon="circle-plus" /></button>
      </div>            
    </div>
    <hr> 
    <label>Total</label>   
    <label  v-if="daysBooked()" class="inputValue">${{ costs() }}</label>  
    <br><br>
    <!-- Conditional buttons for making a booking     -->
    <button v-if="user && !costs()" type="button" class="btnReserveAmber" >
      Select date and guest to make a reservation
    </button>
    <button v-if="user && costs()" type="button" class="btnReserve" data-bs-toggle="modal" data-bs-target="#applicationForm">
      Make a reservation
    </button>    
    <button v-if="!user" type="button" class="btnReserveNotLogged" >
      Log in to make a booking
    </button> 
    <br>
    <br> 
</div> 

<!-- MODAL -->
<!-- bootstrap MODAL for Application form -->
<div v-if="user" class="modal fade" id="applicationForm" tabindex="-1" aria-labelledby="applicationForm" aria-hidden="true" data-bs-keyboard="false" data-bs-backdrop="static">
  <div class="modal-dialog modal-md">
   
   <div class="modal-content">
      <div v-if="!isSubmitted" class="modal-header" style="background-color:white"> 
       <h4>Make a booking</h4>       
      </div>
      <label v-if="isSubmitted" class="modal-header">Booking has been submitted</label> 
      
      <div class="modal-body">                   
        
        <form @submit.prevent="handleSubmitBooking">
          <div v-if="!isSubmitted">
            <div>
              <label class="inputLabel" >First Name</label> 
              <input v-model="formInfo.firstName" class="inputValue" placeholder="First Name" aria-describedby="firstName">
              <label class="inputValue" ><small class="validateInput" v-for="error in v$.firstName.$errors" :key="error.$uid">First Name:  {{error.$message}}</small></label>  
            </div>            
            <br><br><br>
            <div>
              <label class=" inputLabel" >Last Name</label>
              <input v-model="formInfo.lastName" class="inputValue" placeholder="Last Name" aria-describedby="lastName">
              <label class="inputValue" ><small  class="validateInput" v-for="error in v$.lastName.$errors" :key="error.$uid">Last Name: {{error.$message}}</small></label> 
            </div>
            <br><br><br>
            <div>
              <label class=" inputLabel" >Phone</label>
              <input v-model="formInfo.phone" class="inputValue" placeholder="Phone" aria-describedby="lastName">
              <label class="inputValue" ><small  class="validateInput" v-for="error in v$.phone.$errors" :key="error.$uid">Phone number: {{error.$message}}</small></label> 
            </div>              
            <br><br><br>            
            <div>
              <label class=" inputLabel"  >Check-in</label> 
              <input class="inputValue" type="text"  v-model="dateRange.start" disabled>                               
            </div>
            <br><br><br>
            <div>
              <label class=" inputLabel"  >Checkout</label> 
              <input class="inputValue" type="text"  v-model="dateRange.end" disabled>
            </div>
            <br><br><br>
            <div>
              <label class=" inputLabel"  >Adults ($50 per day)</label> 
              <label class=" inputValue"  >{{counterAdults}}</label> 
            </div>
            <br><br>
            <div>
              <label class=" inputLabel"  >Kids ($25 per day)</label> 
              <label class=" inputValue"  >{{counterKids}}</label> 
            </div>
            <br><br>
            <div>
              <label class=" inputLabel"  >Days booked</label> 
              <label class=" inputValue"  >{{daysBooked()}}</label> 
            </div>
            <br>  
            <hr>                
            <div>
              <label class=" inputLabel" >Total Cost</label>     
              <label class="inputValue">${{costs()}}</label>                         
            </div>
          </div>                     
          <br><br>
          <div class="inputValue">        
            <br>
            <button v-if="!isSubmitted"  class="btnStyle"  aria-label="Submit booking" >Submit booking</button>&nbsp;&nbsp;
            <button v-if="!isSubmitted" type="button" class="btnStyle" data-bs-dismiss="modal">Close</button>              
            <router-link v-if="isSubmitted" 
            to="/UserAccount"><button type="button" class="btnStyle" data-bs-dismiss="modal">Close</button>
            </router-link>              
          </div>
         
        </form>                  
      </div>      
    </div>
  </div>
</div>
<!-- MODAL END -->
</template>

<script setup>
   
//vue imports
import { ref, reactive, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

//firebase imports
import { db } from '../firebase/config.js'
import { addDoc, collection, getDocs, getDoc, doc, onSnapshot  } from 'firebase/firestore'
import router from '../router'

//valiate with vuelidate library
import useVuelidate from '@vuelidate/core'
import { required, numeric, maxLength } from '@vuelidate/validators'

//this is to import user UID (unique id) and add that UID to the booking details in DB
//this UID is used to retrieve that users data. So only the specific user details are retrieved when that user is logged in.
import getUser from '../composables/getUser.js'
const { user } = getUser()

//firebase- add booking details to database

const review = ref('') 
const starRating = ref('') 

// If there is a user the that users email is saved to DB
let email
if(user.value){
  email= user.value.email
}

//valiate with vuelidate library
const formInfo = reactive({
      firstName: '',
      lastName:'',
      phone: ''      
      })

const rules = {
      firstName: { required },
      lastName: { required },
      phone: { required, numeric, maxLength: maxLength(10) }    
    }

const v$ = useVuelidate(rules, formInfo) 

//submit booking to DB
const isSubmitted = ref()

const handleSubmitBooking = async () => {   
   const colRef = collection(db, 'customers') 
   const result = await v$.value.$validate()
    if(result){
    await addDoc(colRef, {
    firstName: formInfo.firstName,
    lastName: formInfo.lastName,
    email : email,
    phone: formInfo.phone,
    checkin: dateRange.value.start,
    checkout:dateRange.value.end,
    costs:costs(),
    adults:counterAdults.value,
    kids:counterKids.value,
    daysBooked:daysBooked(),
    userUid: user.value.uid,
    review: review.value    
  })
    isSubmitted.value = true   
    }  
 }

//v-calendar
  const colRef = collection(db, 'customers')
  let docs = [] 
  let Adisabledates = ref([])  

  onSnapshot(colRef, (snapshot) => {    
    snapshot.docs.forEach(doc => { docs.push({ ...doc.data(), id: doc.id }) })           
    
     Adisabledates.value = docs.map((date) => 
      ({start : new Date(date.checkin), end : new Date(date.checkout) })) 
      })

  const dateRange = ref({
   start : '',
   end : ''   
   })   
   
  const modelConfig= {
        mask: 'D MMMM YYYY', // Used to format date , uses 'iso' if missing
        type: 'string'       
      }

//GUEST COUNTER , COST AND AMOUNT OF DAYS BOOKED
//counter adults
const counterAdults = ref(0)

const decreaseCountAdults = () => {
    counterAdults.value--
}
const increaseCountAdults = () => {
    counterAdults.value++
}

//counter kids
const counterKids = ref(0)

const decreaseCountKids = () => {
    counterKids.value--
}
const increaseCountKids = () => {
    counterKids.value++
}

// Days booked   
  const daysBooked = () => { 
  let dateDifference = new Date((dateRange.value.end)+0).getTime() - new Date((dateRange.value.start)+0).getTime() //the +0 is to make the variable a number when no date is selected. Else it displays as 'NAN'
  let totalDaysDifference = Math.ceil(dateDifference  / (1000 * 3600 * 24))
  return totalDaysDifference 
}

const dayQty = () => {
  if(daysBooked() === 1)
    return 'day.'
  else{
    return 'days.'
    }
}

// costing calculations per day 
const perDay = () => {
    return parseInt((50*counterAdults.value)+(25*counterKids.value))
}

//total cost
let costs = ()=> {
    return perDay() * daysBooked() 
}

</script>

<style scoped>
.myCard { 
  background-color: rgb(255, 255, 255); 
  width: 100%;  
  height: 100%;
  font-family: 'Lexend Deca', sans-serif;
  padding: 4% 5%;  
  /* border-radius: 3px; */
}
.btnAddGuest {    
  border: 0;
  background-color: white;   
}
.btnReserveNotLogged {
  background-color: rgb(247, 9, 9);
  border-radius: 5px;
  border: 0;
  box-shadow: 0 8px 16px 0 rgba(114, 176, 243, 0.2);
  width: 100%;
  height: 7%;   
  font-size: 120%; 
  font-weight: bold; 
}
.btnReserveNotLogged:hover {
  background-color: rgb(164, 15, 15);
}
.btnReserve {    
  background-color: rgb(61, 199, 51);
  border-radius: 5px;
  border: 0;
  box-shadow: 0 8px 16px 0 rgba(114, 176, 243, 0.2);
  width: 100%;
  height: 7%;   
  font-size: 110%;      
}
.btnReserveAmber {    
  background-color: rgb(246, 143, 48);   
  border-radius: 5px;
  border: 0;   
  width: 100%;
  height: 9%;   
  font-size: 110%;
  transition-duration: 0.4s;      
} 
.btnReserveAmber:hover {
  background-color: rgb(192, 110, 34);
}
.btnStyle {
  background-color: rgb(255, 255, 255);
  border: solid 1px;
  border-radius: 3px;
}
input {
  padding-top: 1%;
  padding-right: 10%;
  font-size: 100%;
}
label {
  font-size: 100%;
}
/* #icon {
    background-color: blueviolet;
} */

.inputLabel {
  float: left;
  margin-left: 4%;
}
.inputValue {
  float: right;
  margin-right: 3%;
}
.validateInput {
color: red;
font-size: small;  
}

@media only screen and (max-width: 768px) {
  
}

@media only screen and (max-width: 600px){

}
</style>