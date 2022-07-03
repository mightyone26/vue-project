<template>
  <NavBar />
  <div class="searchBox">
    <label ><b>Search by Last Name:</b></label> &nbsp;
    <input type="text" v-model="inputText">
  </div>

  <div >
    <table id="tableStyle"  >
      <thead>
        <tr>      
          <th>First Name</th>
          <th >Last Name</th>
          <th >email</th>
          <th >Phone</th>
          <th>Check-in</th>
          <th>Checkout</th>         
          <th>Adult Qty</th>
          <th>Kid Qty</th>
          <th>Days Booked</th>
           <th>Cost</th>
          <th>Edit </th>
          <th>View</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>          
        <tr v-for="customers in filtered()" :key="customers.id" >     

          <td>{{ customers.firstName }}</td> 
          <td>{{ customers.lastName }}</td>
          <td>{{ customers.email}}</td>
          <td>{{ customers.phone}}</td>
          <td>{{ customers.checkin}}</td>
          <td>{{ customers.checkout}}</td>         
          <td>{{ customers.adults}}</td>
          <td>{{ customers.kids}}</td>
          <td>{{ customers.daysBooked}}</td>
           <td>{{ customers.costs}}</td>
          
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
#tableStyle {
  border-collapse: collapse;
  width: 80%;
  margin: 3% 10%;
}
#tableStyle td, #tableStyle th {
  border: 1px solid #ddd;  
  padding: 8px;
}

#tableStyle tr:nth-child(even){background-color: #f0f0ea;}

#tableStyle tr:hover {background-color: #ddd;}

#tableStyle th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #b7bb84;
  color: rgb(0, 0, 0);
}
.searchBox {
  margin: 2% 10%
}
</style>