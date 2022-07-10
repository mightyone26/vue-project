<template>
  <NavBar />
    <label class="heading"><h4><b>Your Booking Details:</b></h4></label>
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
            <th scope="col">Days</th>
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
            <td>{{ customers.daysBooked}}</td>
            <td>{{ customers.costs}}</td> 
            
          </tr>
        </tbody>
      </table>   
    </div>

    <div>
      <h5>Add review</h5>
      <textarea v-model="review" cols="30" rows="10"></textarea>
      <br>
      <button @click="handleUpdate" >Submit review</button>
    </div>
</template>

<script setup>
//imports
import NavBar from '@/components/NavBar.vue'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

//firebase imports
import { db } from '@/firebase/config'
import { collection, onSnapshot, doc, updateDoc, query, where } from 'firebase/firestore'

//import get user to get current user
import getUser from '../composables/getUser'
const { user } = getUser()

// data variables
const route = useRoute()
const router = useRouter()
const customers = ref([])
 let docs = []
const review = ref()

//get customer from db by using query to match to correct customer Uid (unique customer id)
const colRef = collection(db, 'customers')
const q = query(colRef, where( 'userUid', '==', user.value.uid))
 
  onSnapshot(q, (snapshot) => {    
      snapshot.docs.forEach(doc => { docs.push({ ...doc.data(), id: doc.id }) })           
         customers.value = docs 
      })

//add review to db
 const customerId = docs.map((e) => e.phone)
 console.log('svdv',customerId)
 const handleUpdate = async () => {
  const docRef = doc(db, 'customers', customerId )  
  await updateDoc(docRef, {
    review: review.value    
  })
  confirm('Submitted')
  router.push('/')
}


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