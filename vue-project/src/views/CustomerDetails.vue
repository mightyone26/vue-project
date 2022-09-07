<template>
  <NavBar />
   
 
  <div class="MyCard">
    <div class="searchBox">
      <label ><b>Search by Last Name:</b></label> &nbsp;
      <input type="text" v-model="inputText">
    </div>

    <div style=" overflow:scroll">
      <table id="tableStyle" >
        <thead>
          <tr>      
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Check-in</th>
            <th>Checkout</th>         
            <th>Adult</th>
            <th>Kid</th>
            <th>Days</th>
            <th>Cost</th>
            <th>Review</th>
            <th>Edit</th>
            <th>View</th> 
          </tr>
        </thead>
        <tbody> 
              
          <tr v-for="customers in filtered()" :key="customers.id" >       
          
            <td>{{ customers.firstName }}</td> 
            <td>{{ customers.lastName }}</td>
            <td >{{ customers.email}}</td>
            <td>{{ customers.phone}}</td>
            <td>{{ customers.checkin}}</td>
            <td>{{ customers.checkout}}</td>         
            <td>{{ customers.adults}}</td>
            <td>{{ customers.kids}}</td>
            <td>{{ customers.daysBooked}}</td>
            <td>{{ customers.costs}}</td>
            <td>{{ customers.review}}</td>
            
            <td><button @click="handleEdit(customers)"> edit</button></td>
            <td><button @click="handleView(customers)"> view</button></td>
          </tr> 
                
        </tbody>
      </table>    
    </div> 
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
let unFiltered = ref ([]) 

 //(get customers) realtime collection data (onSnapshot takes two values 1. colref which grabs db info and 2. function that put db data into loop which pushes data to customers array variable)  
    onSnapshot(q, (querySnapshot) => { 
      let docs = []    
      querySnapshot.docs.forEach(doc => { docs.push({ ...doc.data(), id: doc.id }) })           
         unFiltered.value = docs         
      })
  
  // Search Customers by lastname   
   const filtered = () => { 
    //  console.log(unFiltered.value )
     return  unFiltered.value.filter((customer) => customer.lastName.toLowerCase().includes(inputText.value.toLowerCase()))
     }     
 
 // delete customer
  const handleDelete = (customers) => {
    const docRef = doc(db, 'customers', customers.id)   
    deleteDoc(docRef)
     router.push(`/CustomerDetails`)
  }

  // to edit customer page
  const handleEdit = (customers) => {
    router.push(`/EditBooking/${customers.id}`)
  }

   // to view individual customer page
  const handleView = (customers) => {    
    router.push({ path: `/IndividualCustomerDetails/${customers.id}` })
    }

</script>

<style scoped>

.myCard {   
  font-family: 'Lexend Deca', sans-serif;  
}
button {
  background-color: rgb(255, 255, 255);
  border: solid 1px;
  border-radius: 3px;
}
#tableStyle { 
  border-collapse: collapse;
  width: 95%;
  margin: 3% 2%;   
  }
 
#tableStyle td, #tableStyle th {
  border: 1px solid rgb(245, 240, 240);  
  padding: 2px; 
}
#tableStyle tr:nth-child(even){
  background-color: #6e69691a;
}
#tableStyle tr:hover {
  background-color: rgba(122, 50, 57, 0.518);
}
#tableStyle th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #f0eeed7d;
  color: rgb(0, 0, 0);  
}
.searchBox {
  margin: 2% 10%
}

</style>