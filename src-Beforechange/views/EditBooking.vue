<template>
 <NavBar />
<div class="flexContainer">
 
    <!-- <form class="applyForm" @submit.prevent="updateDoc" v-for="customers in customers" :key="customers.id" > -->
    <form class="applyForm" @submit.prevent="handleUpdate" >

      <div>
        <label for="First Name" class="form-label">First Name</label>
        <input type="text" class="form-control" name="firstName" v-model="form.firstName" aria-describedby="firstName">    
      </div>
      
      <div >
        <label for="lastName" class="form-label">Last Name</label>
        <input type="text" class="form-control" name="lastName" v-model="form.lastName" aria-describedby="lastName">
      </div> 
        
      <div >
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" name="email" v-model="form.email"  aria-describedby="email">    
      </div>
      
      <div >
        <label for="phone" class="form-label">Telephone</label>
        <input type="text" class="form-control" name="phone" v-model="form.phone" aria-describedby="phone" >
      </div> 
        <br>
      <div>
        <button>Update Booking</button>
      </div>

    </form>

</div>


</template>

<script setup>
//imports
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
    phone : ''
})


//get single customer
// const docRef = doc(db, 'customers', route.params.id )
// getDoc(docRef) 
// .then((doc) => {
//   customers.value = [doc.data()]

//   form.firstName = customers.value.map((customers) => customers.firstName)
//   form.lastName= customers.value.map((customers) => customers.lastName) 
//   form.email= customers.value.map((customers) => customers.email)
//   form.phone= customers.value.map((customers) => customers.phone)      
//     })
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
    phone: form.phone
  })
  confirm('Submitted')
  router.push('/CustomerDetails')
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