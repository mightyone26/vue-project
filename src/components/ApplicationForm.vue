<template>
<div >
  
    <form  @submit.prevent="handleSubmit">
      
      <div class="field" >
        <label class="label" >First Name</label> 
        <input 
          class="input"
          type="text"
          name="firstName"
          placeholder="First Name"
          v-model="firstName" 
          aria-describedby="firstName">    
      </div>

     <span class="p-float-label">
	<InputText id="username" type="text" v-model="value" />
	<label for="username">Username</label>
</span>
      
      <div class="field">
        <label class="label" >Last Name</label> 
        <input 
          class="input"
          type="text" 
          name="lastName"
          placeholder="Last Name" 
          v-model="lastName" 
          aria-describedby="lastName">
      </div> 
        
      <div class="field">
        <label class="label" >Email</label>    
        <input 
        class="input" 
        type="email" 
        name="email"
        placeholder="Email" 
        v-model="email"  
        aria-describedby="email" >        
      </div>   
      
      <div class="field">
        <label class="label" for="phone" >Telephone</label> 
        <input 
          class="input" 
          type="text"  
          name="phone"
          placeholder="Phone"  
          v-model="phone" 
          aria-describedby="phone" >
      </div>

      <button class="button is-primary">Submit</button>
      

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


</style>