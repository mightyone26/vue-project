<template>
  <NavBar />
  <div class="myCardEditForm" >
      <div class="heading"><h4><b>Edit customer details</b></h4></div>
      <br>
      <div>
        <label class="inputLabel">First Name</label>
        <input type="text" class="inputValue"  v-model="form.firstName" aria-describedby="firstName">    
      </div>
      <br>
      <br>
      <div >
        <label class="inputLabel" >Last Name</label>       
        <input type="text" class="inputValue"  v-model="form.lastName" aria-describedby="lastName">
      </div> 
      <br>
      <br> 
      <div >
        <label class="inputLabel" >Email</label>
        <input type="email" class="inputValue" v-model="form.email"  aria-describedby="email">    
      </div>
      <br>
      <br>
      <div >
        <label class="inputLabel" >Telephone</label>
        <input type="text" class="inputValue" v-model="form.phone" aria-describedby="phone" >
      </div>
      <br>
      <br>
       <div >
        <label class="inputLabel" >Check-in</label>
        <label class="inputValue" >{{ checkInDateEdit() }}</label>
      </div> 
      <br>
      <br>  
      <div >
        <label class="inputLabel" >Checkout</label>        
        <label class="inputValue" >{{ checkOutDateEdit() }}</label>
      </div>
      <br>        
      <div>
        <br>     
        <label class="inputLabel">Booked for <b>{{ daysBooked() }}</b> {{ dayQty() }}</label>     
        <br>         
      </div>
      <br>
      <div>
        <label class="inputLabel"> Adult Guests ($50 per day) </label> 
        <div class="inputValue">        
          <button class="btnAddGuest" :disabled="counterAdults === 0" @click="decreaseCountAdults"> <fa icon="circle-minus" /></button>
          &nbsp; <span >{{ counterAdults }}</span> &nbsp;
          <button class="btnAddGuest" :disabled="counterAdults === 6" @click="increaseCountAdults"><fa icon="circle-plus" /></button>
        </div>
      </div>   
      <hr>
      <br>
      <div>
      <label class="inputLabel"> Under 18 yrs ($25 per day)  </label> 
        <div class="inputValue">
        <button class="btnAddGuest" :disabled="counterKids === 0" @click="decreaseCountKids"> <fa icon="circle-minus" /></button>
        &nbsp; <span >{{ counterKids }}</span> &nbsp;
        <button class="btnAddGuest" :disabled="counterKids === 6" @click="increaseCountKids" > <fa icon="circle-plus" /></button>
        </div>            
      </div>
      <hr>
      <br> 
      <label class="inputLabel">Total</label>   
      <label class="inputValue">${{ costs() }}</label>
      <br>
      <br>      
      <br>  
      <div class="inputValue" >
        <button  @click="handleUpdate">Update Booking</button>
      </div> 
      <div class="inputLabel" >
        <button style="background-color:red" class="btnUser" type="button" data-bs-toggle="modal" data-bs-target="#deleteConfirm"> Delete </button>       
      </div> 
  </div>
    <!-- Modal (Comfirm Delete) --> 
  <div class="modal fade" id="deleteConfirm" tabindex="-1" aria-labelledby="deleteConfirm" >           
    <div class="modal-dialog modal-sm">                
      <div class="modal-content">            
        <div class="modal-body">                      
          <h5>Delete booking?</h5>          
          <br>      
          <button data-bs-dismiss="modal">Cancel</button>&nbsp; &nbsp;             
          <button style="background-color:red" @click="handleDelete()" data-bs-dismiss="modal" aria-label="delete" >Delete</button>
        </div>      
      </div>
    </div>
  </div> 
   
  <div class="calendarPosition">
      <v-date-picker  
        v-model="dateRange" 
        is-range
        :model-config="modelConfig" 
        color="teal"
        :disabled-dates= "Adisabledates"
        :columns ="2"
        is-expanded    
        />
  </div>
 
</template>

<script setup>
  //vue imports
  import NavBar from '@/components/NavBar.vue'
  import { reactive, ref, onMounted, onBeforeMount } from 'vue'
  import { useRoute, useRouter } from 'vue-router'

  //firebase imports
  import { db } from '@/firebase/config'
  import {collection, getDoc, doc, updateDoc, onSnapshot, deleteDoc} from 'firebase/firestore'
  import CustomerDetailsVue from './CustomerDetails.vue'  

  // data variables
  const route = useRoute()
  const router = useRouter()
  const customers = ref()
  const form = ref({
      firstname : '' ,
      lastName : '' ,
      email : '' ,
      phone : '' ,
      start: '',
      end: '',
      costs: ''      
  })   
 
//Retrieving customer details from DB and displaying it when the form loads on browser
  const singleCustomerDetails = async ()=> {
    const docRef =  doc(db, 'customers', route.params.id )
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data()) 
      const singleCustomerDetails =  docSnap.data()
      
      form.value.firstName = singleCustomerDetails.firstName
      form.value.lastName = singleCustomerDetails.lastName
      form.value.email = singleCustomerDetails.email
      form.value.phone= singleCustomerDetails.phone
      form.value.start= singleCustomerDetails.checkin
      form.value.end = singleCustomerDetails.checkout
      form.value.costs = singleCustomerDetails.costs
      counterAdults.value = singleCustomerDetails.adults
      counterKids.value = singleCustomerDetails.kids     
    } else {        
    console.log("No such document!");
    }
  }

  // runs function to load single customer details on page then user can edit details
     singleCustomerDetails()

  //v-calendar
  const colRef = collection(db, 'customers')
  let docs = [] 
  let Adisabledates = ref([])

  const dateRange = ref({
   start : '',
   end : ''   
   }) 
// Gets booked dates from DB and then disables those dates from calender
  onSnapshot(colRef, (snapshot) => {    
      snapshot.docs.forEach(doc => { docs.push({ ...doc.data(), id: doc.id }) })           
    
      Adisabledates.value = docs.map((date) => 
      ({start : new Date(date.checkin), end : new Date(date.checkout) })) 
      })
      
// Used to format date , uses 'iso' if missing
      const modelConfig= {
        mask: 'D MMMM YYYY', 
        type: 'string'       
      } 

      const checkInDateEdit = () => { //this function updates to the new edited check-in date if dateRange ref is updated.
        if(dateRange.value.start){          
          return dateRange.value.start
        }
          else {
            return form.value.start
          }
        }

      const checkOutDateEdit = () => {  //this function updates to the new edited checkOut date if dateRange ref is updated.
      if(dateRange.value.end){          
        return dateRange.value.end
      }
        else {
          return form.value.end
        }
      }

//counter adults
const adultsCount = ref()
const counterAdults = ref(0)

const decreaseCountAdults = () => {
    counterAdults.value--
}
const increaseCountAdults = () => {
    counterAdults.value++
}

//counter kids
const kidsCount = ref()
const counterKids = ref(0)

const decreaseCountKids = () => {
    counterKids.value--
}
const increaseCountKids = () => {
    counterKids.value++
}

// Days booked
 const daysBooked = () => { 
  let dateDifference = new Date(( checkOutDateEdit())+0).getTime() - new Date(( checkInDateEdit())+0).getTime() //the +0 is to make the variable a number when no date is selected. Else it displays as 'NAN'
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
const costs = ()=> {
    return perDay() * daysBooked()
}

 //update customer to DB when button clicked. Uses firebase updateDoc to send data back to DB.
  const handleUpdate = async () => {
  const docRef = doc(db, 'customers', route.params.id ) 

  await updateDoc(docRef, {
    firstName: form.value.firstName,
    lastName: form.value.lastName,
    email : form.value.email,
    phone: form.value.phone,
    checkin: checkInDateEdit(),
    checkout: checkOutDateEdit(),
    costs: costs(),
    adults:counterAdults.value,
    kids:counterKids.value,
    daysBooked:daysBooked()
  })
  confirm('Submitted')
  router.push('/CustomerDetails')
}

 // delete customer
  const handleDelete = () => {
    const docRef = doc(db, 'customers', route.params.id)   
    deleteDoc(docRef)
    router.push(`/CustomerDetails`)
  }
  
</script>

<style scoped>
button {  
  background-color: rgb(255, 255, 255);
  border: solid 1px;
  border-radius: 3px; 
}
.heading {  
  padding: 1%;
}
.myCardEditForm {
  float: left;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 30%;  
  height: 100%;
  font-family:Arial, Helvetica, sans-serif;
  padding: 2% 2%;
  margin-left: 7%;
  margin-top: 2%;
  margin-bottom: 2%;
  background-color: rgb(255, 255, 255);
}
.inputLabel {
    float: left;
    margin-left: 5%;
}
.inputValue {
    float: right;
    margin-right: 5%;
}
.calendarPosition {
  float: right;
  margin-right: 15%;
  margin-top: 10%;
}
.btnAddGuest {    
    border: 0;
    background-color: white;   
}
.modal-body {
  text-align: center;
}
</style>


