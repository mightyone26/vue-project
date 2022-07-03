<template>
  <NavBar />
    <label class="heading"><h4><b>Customer Details:</b></h4></label>
    <div>
      <table id="tableStyle"  >
        <thead>
          <tr>      
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">email</th>
            <th scope="col">phone</th>
            <th scope="col">Check-in</th>
            <th scope="col">Checkout</th>
            <th scope="col">Costs</th>
          </tr>
        </thead>
        <tbody>   
          <tr v-for="customers in customers" :key="customers.id" >     
            <td>{{ customers.firstName }}</td> 
            <td>{{ customers.lastName }}</td>
            <td>{{ customers.email}}</td>
            <td>{{ customers.phone}}</td>
            <td>{{ customers.checkin}}</td>
            <td>{{ customers.checkout}}</td>
            <td>{{ customers.costs}}</td>
          </tr>
        </tbody>
      </table>   
    </div>
</template>

<script setup>
//imports
import NavBar from '@/components/NavBar.vue'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

//firebase imports
import { db } from '@/firebase/config'
import {collection, getDoc, doc, onSnapshot, deleteDoc} from 'firebase/firestore'
import CustomerDetailsVue from './CustomerDetails.vue'

// data variables
const route = useRoute()
const router = useRouter()
const customers = ref()

//get single customer
 const docRef = doc(db, 'customers', route.params.id )
  getDoc(docRef) 
  .then((doc) => {
  customers.value =  [doc.data()]
   })

</script>

<style scoped>
#tableStyle {
  border-collapse: collapse;
  width: 80%;
  margin: 1% 10%;
}
#tableStyle td, #tableStyle th {
  border: 1px solid #ddd;  
  padding: 8px;
}
#tableStyle tr:nth-child(even){
  background-color: #f0f0ea;
}
#tableStyle tr:hover {
  background-color: #ddd;
}
#tableStyle th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #b7bb84;
  color: rgb(0, 0, 0);
}
.heading {
  margin: 2% 10%
}
</style>