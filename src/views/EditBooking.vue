<template>
  <NavBar />
  <div class="myCardEditForm" >    
    <form  @submit.prevent="handleUpdate" >
      <div class="heading"><h4><b>Edit customer details</b></h4></div>
      <br>
      <div>
        <label for="First Name" class="inputLabel">First Name</label>
        <input type="text" class="inputValue" name="firstName" v-model="form.firstName" aria-describedby="firstName">    
      </div>
      <br>
      <br>
      <div >
        <label for="lastName" class="inputLabel" >Last Name</label>       
        <input type="text" class="inputValue" name="lastName" v-model="form.lastName" aria-describedby="lastName">
      </div> 
      <br>
      <br> 
      <div >
        <label for="email" class="inputLabel" >Email</label>
        <input type="email" class="inputValue" name="email" v-model="form.email"  aria-describedby="email">    
      </div>
      <br>
      <br>
      <div >
        <label for="phone" class="inputLabel" >Telephone</label>
        <input type="text" class="inputValue"  name="phone" v-model="form.phone" aria-describedby="phone" >
      </div>
      <br>
      <br>
       <div >
        <label for="checkin" class="inputLabel" >Check-in</label>
        <input type="text" class="inputValue" name="lastName" v-model="form.checkin" aria-describedby="lastName">
      </div> 
      <br>
      <br>  
      <div >
        <label for="checkout" class="inputLabel" >Checkout</label>
        <input type="text" class="inputValue"  name="email" v-model="form.checkout"  aria-describedby="email">    
      </div>
      <br>
      <br>
      <div >
        <label for="phone" class="inputLabel" >Costs</label>
        <input type="text" class="inputValue"  name="phone" v-model="form.costs" aria-describedby="phone" >
      </div>  
      <br>
      <br>
      <br>  
      <div class="inputValue" >
        <button>Update Booking</button>
      </div>
    </form>
  </div>
</template>

<script setup>
  //vue imports
  import NavBar from '@/components/NavBar.vue'
  import { reactive, ref, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'

  //firebase imports
  import { db } from '@/firebase/config'
  import {collection, getDoc, doc, updateDoc} from 'firebase/firestore'
  import CustomerDetailsVue from './CustomerDetails.vue'

  // data variables
  const route = useRoute()
  const router = useRouter()
  const customers = ref()

  const form = reactive({
      firstname : '' ,
      lastName : '' ,
      email : '' ,
      phone : '' ,
      checkin: '',
      checkout: '',
      costs: ''
  })

  const col =async ()=> {
    const docRef =  doc(db, 'customers', route.params.id )
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data()) 
      const cus =  docSnap.data()
      
      form.firstName = cus.firstName
      form.lastName = cus.lastName
      form.email = cus.email
      form.phone= cus.phone
      form.checkin= cus.checkin
      form.checkout= cus.checkout
      form.costs = cus.costs
    } else {        
    console.log("No such document!");
    }
  }
  onMounted(col)
    
 //update customer 
  const handleUpdate = async () => {
  const docRef = doc(db, 'customers', route.params.id ) 

  await updateDoc(docRef, {
    firstName: form.firstName,
    lastName: form.lastName,
    email : form.email,
    phone: form.phone,
    checkin: form.checkin,
    checkout: form.checkout,
    costs: form.costs
  })
  confirm('Submitted')
  router.push('/CustomerDetails')
}
 
</script>

<style scoped>
.heading {
  background-color: #b7bb84;
  padding: 1%;
}
.myCardEditForm {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 35%;  
  height: 100%;
  font-family:Arial, Helvetica, sans-serif;
  padding: 4% 2%;
  margin-left: 7%;
  margin-top: 2%;
  background-color: rgb(248, 248, 248);
}
.inputLabel {
    float: left;
    margin-left: 5%;
}
.inputValue {
    float: right;
    margin-right: 30%;
}
</style>