<template>
<div class="flexContainer">
  
    <form class="applyForm" @submit.prevent="handleSubmit">

      <div >
        <label for="First Name" class="form-label">First Name</label>
        <input type="text" class="form-control" name="firstName" v-model="firstName" aria-describedby="firstName">    
      </div>
      
      <div >
        <label for="lastName" class="form-label">Last Name</label>
        <input type="text" class="form-control" name="lastName" v-model="lastName" aria-describedby="lastName">
      </div> 
        
      <div >
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" name="email" v-model="email"  aria-describedby="email">    
      </div>
      
      <div >
        <label for="phone" class="form-label">Telephone</label>
        <input type="text" class="form-control" name="phone" v-model="phone" aria-describedby="phone" >
      </div> 

      <div>
        <button>Submit Booking</button>
      </div>

    </form>

</div>


</template>

<script setup>
//imports
import { ref } from 'vue'

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

</script>

<style>

.flexContainer {
  display: flex;
  justify-content: center;
}
.flexContainer > div {
  background-color: #fcfcfc;
  margin: 10px;
  padding: 20px;
  font-size: 30px;
}
.applyForm {
    display: flex;
    justify-content: center;
    flex-direction: column;
    /* border: 1px solid black; */
}

</style>