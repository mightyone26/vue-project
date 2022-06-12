<template>
  <NavBar />
  <div>
    <label for="">Search by Last Name</label>
     <input type="text" v-model="inputText">
  </div>

  <div >
    <table   >
      <thead>
        <tr>      
          <th>First Name</th>
          <th >Last Name</th>
          <th >email</th>
          <th >Phone</th>
        </tr>
      </thead>
      <tbody>          
        <tr v-for="customers in filtered()" :key="customers.id" >     

          <td>{{ customers.firstName }}</td> 
          <td>{{ customers.lastName }}</td>
          <td>{{ customers.email}}</td>
          <td>{{ customers.phone}}</td>
          
          <td><button @click="handleEdit(customers)"> edit</button></td>
          <td><button @click="handleView(customers)"> view</button></td>          
          <td><button @click="handleDelete(customers)"> delete</button></td>         
          
        </tr>        
      </tbody>
    </table>    
</div>

</template>

<script setup>
//firebase imports
import { db } from '@/firebase/config'
import { collection, getDocs, getDoc, doc, deleteDoc, onSnapshot, query, orderBy } from '@firebase/firestore'  

// vue imports
import { ref, onMounted } from 'vue'
import NavBar from '@/components/NavBar.vue'
import { useRoute, useRouter } from 'vue-router'

// data variables
const inputText = ref('')
const route = useRoute()
const router = useRouter()
const colRef = collection(db, 'customers')
const q = query(colRef, orderBy('lastName', 'asc'))
let docs = [] 
let unFiltered = ref () 

 //(add customers) realtime collection data (onSnapshot takes two values 1. colref which grabs db info and 2. function that put db data into loop which pushes data to customers array variable)  
    onSnapshot(q, (snapshot) => {
    
    snapshot.docs.forEach(doc => { docs.push({ ...doc.data(), id: doc.id }) })           
         unFiltered.value = docs         
    })
  
  // Search Customers   
   const filtered = () => { 
     console.log(unFiltered.value )
     return  docs.filter((customer) => customer.lastName.toLowerCase().includes(inputText.value.toLowerCase()))
     }     
 
 // delete customer
  const handleDelete = (customers) => {
    const docRef = doc(db, 'customers', customers.id)
    deleteDoc(docRef)
  }

  // to edit customer page
  const handleEdit = (customers) => {
    router.push(`/EditBooking/${customers.id}`)
  }

   // to view customer page
  const handleView = (customers) => {    
    router.push({ path: `/IndividualCustomerDetails/${customers.id}` })
    }

</script>

<style scoped>

</style>