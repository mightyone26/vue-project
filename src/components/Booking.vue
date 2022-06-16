<template>

<div class="myCard" >       
 
    <h3>Make a Booking</h3>  
    <br>
    <label style="float:left ">Select check-in and checkout dates:</label>
    <br>
    <br>
    <!-- <div class="datePicker">        -->
         <Calendar />
    <!-- </div>  -->
    <!-- <br>
    <br>  
    <br>  -->
    
    <!-- <div >
        <label style="float:left ">Check-in:</label>  &nbsp;
        <label> {{  DateRecieved[0] }}</label>
        <br>
        <br>        
        <label style="float:left">Checkout:</label>  &nbsp;
        <label> {{ DateRecieved[1] }}</label> 
        <br>
        <br>
        <hr>    
    </div> -->

    <div>
        <label style="float:left padding-top:10% "> Adult Guests </label> 
        <div style="float:right ">        
            <button class="btnAddGuest" :disabled="counterAdults === 0" @click="decreaseCountAdults"> <fa icon="circle-minus" /></button>
            &nbsp; <span >{{ counterAdults }}</span> &nbsp;
            <button class="btnAddGuest" :disabled="counterAdults === 6" @click="increaseCountAdults"><fa icon="circle-plus" /></button>
        </div>
    </div>
   
    <hr>
    <div>
        <label style="float:left padding-top:5%"> Under 18 yrs  </label> 
        <div style="float:right ">
        <button class="btnAddGuest" :disabled="counterKids === 0" @click="decreaseCountKids"> <fa icon="circle-minus" /></button>
        &nbsp; <span >{{ counterKids }}</span> &nbsp;
        <button class="btnAddGuest" :disabled="counterKids === 6" @click="increaseCountKids"> <fa icon="circle-plus" /></button>
        </div>            
    </div>
    <hr>
     <br>     
     <br>
     <label style="float:left ">Total</label>   
     <label style="float:right ">${{costs}}</label>  
  <br>
  <br>  
  <button type="button" class="btnReserve" data-bs-toggle="modal" data-bs-target="#applicationForm">
    Make a reservation
  </button>
</div> 

<!-- bootstrap Modal for Application form -->
<div class="modal fade" id="applicationForm" tabindex="-1" aria-labelledby="applicationForm" aria-hidden="true" data-bs-keyboard="false" data-bs-backdrop="static">
 <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="applicationForm">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       
        <div class="myCardApplicationForm">  
            <form  @submit.prevent="handleSubmit">
            
                <div class="field" >
                    <label class="inputLabel" >First Name</label> 
                    <input 
                    class="inputValue"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    v-model="firstName" 
                    aria-describedby="firstName">    
                </div>
                <!-- <br>
                <br> -->
                <!-- <span class=" inputLabel">
                <InputText class="inputValue" id="username" type="text" v-model="value" />
                <label class=" inputLabel">Username</label>
                </span> -->
                <br>
                <br>
                <div class="field">
                    <label class=" inputLabel" >Last Name</label> 
                    <input 
                        class="inputValue"
                        type="text" 
                        name="lastName"
                        placeholder="Last Name" 
                        v-model="lastName" 
                        aria-describedby="lastName">
                </div> 
                <br>
                <br>
                <div class="field">
                    <label class=" inputLabel" >Email</label>    
                    <input 
                    class="inputValue" 
                    type="email" 
                    name="email"
                    placeholder="Email" 
                    v-model="email"  
                    aria-describedby="email" >        
                </div>   
                <br>
                <br>
                <div class="field">
                    <label class=" inputLabel" for="phone" >Telephone</label> 
                    <input 
                    class="inputValue" 
                    type="text"  
                    name="phone"
                    placeholder="Phone"  
                    v-model="phone" 
                    aria-describedby="phone" >
                </div>

                 <br>
                <br>
                <div class="field">
                    <label class=" inputLabel" for="phone" >Cost</label> 
                    <label   class="inputValue" >${{costs}}</label>                   
                </div>
            
                <div class="modal-footer">        
           
         <button @click="handleSubmit" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Making booking</button>
         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>    
      </div>

            </form> 
        </div>
      </div>

      
    </div>
  </div>
</div>
   
    
</template>

<script setup>

// Calender datepicker import
import Calendar from '@/components/Calendar.vue'

   
//vue imports
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

//firebase imports
import { db } from '@/firebase/config'
import { addDoc, collection } from 'firebase/firestore'
import router from '../router';

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phone = ref('')
   

const handleSubmit = async () => {
  const colRef = collection(db, 'customers') 

  await addDoc(colRef, {
    firstName: firstName.value,
    lastName: lastName.value,
    email : email.value,
    phone: phone.value
  })
  confirm('Submitted')
  router.push('/')
}


//calendar primevue to delete
const DateRecieved = ref()

//router 
// const route = useRoute()
// const router = useRouter()


//GUEST COUNTER and COST

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

//costing calculations
const costs = computed(() => {
    return (50*counterAdults.value)+(25*counterKids.value)
})

</script>


<style scoped>
.myCard {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 85%;  
  height: 100%;
  font-family:Arial, Helvetica, sans-serif;
  padding: 4% 2%;
  margin-left: 20px;
}
.myCard:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);  
}
.btnAddGuest {    
    border: 0;
    background-color: white;   
}
.btnReserve {    
    background-color: rgb(210, 231, 240);
    border-radius: 5px;
    border: 0;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    width: 100%;
    height: 7%;   
    font-size: 130%;      
}
input {
    padding-top: 1%;
    padding-right: 10%;
    font-size: 100%;
}
label {
    font-size: 120%;
}
#icon {
    background-color: blueviolet;
}
/* Application Form Modal */
.myCardApplicationForm {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 85%;  
  height: 100%;
  font-family:Arial, Helvetica, sans-serif;
  padding: 4% 2%;
  margin-left: 20px;
}
.inputLabel {
    float: left;
}
.inputValue {
    float: right;
}
</style>