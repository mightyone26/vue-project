<template>
  <NavBar />
  <div class="myCard">
    <label class="heading"><h4><b>Your Booking Details:</b></h4></label>
    <br>
    <br>
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
            <td>${{ customers.costs}}</td>             
          </tr>
        </tbody>
      </table>   
    </div>
    <br>
    <h5>Please rate your stay</h5>
    <div> 
      <!-- &#11088; is the html value for the yellow star symbol taking from https://www.htmlsymbols.xyz/     -->
      <div>
        <!-- Rating for 1 star -->
        <label>&#11088; Terrible</label>&nbsp;&nbsp;        
        <input type="radio" value=" &#11088; Terrible"  v-model="review" /> &nbsp;&nbsp;
        <!-- Rating for 2 star -->
        <label>&#11088;&#11088; Below average</label>&nbsp;&nbsp;&nbsp;
        <input type="radio" value="&#11088; &#11088; Below average" v-model="review" /> &nbsp;&nbsp; 
        <!-- Rating for 3 star -->
        <label>&#11088;&#11088;&#11088; Acceptable </label>&nbsp;&nbsp;&nbsp;        
        <input type="radio"  value="&#11088;&#11088;&#11088; Acceptable" v-model="review" />&nbsp;&nbsp; 
        <!-- Rating for 4 star -->
        <label>&#11088;&#11088;&#11088;&#11088; Enjoyable</label>&nbsp;&nbsp;&nbsp;
        <input type="radio" value="&#11088;&#11088;&#11088;&#11088; Enjoyable" v-model="review" />&nbsp;&nbsp; &nbsp; 
        <!-- Rating for 5 star -->
        <label>&#11088;&#11088;&#11088;&#11088;&#11088; Excellent</label>&nbsp;&nbsp;  
        <input type="radio" value="&#11088;&#11088;&#11088;&#11088;&#11088; Excellent" v-model="review" />&nbsp;&nbsp;
     </div>
     <br>
     <div v-if="review">
      <h6>You are changing your rating to</h6>      
      <i>{{review}}</i>
     </div>

     <div v-if="!review">
      <h6>You rated your stay as</h6> 
      <div v-for="customers in customers" :key="customers.id">
          {{customers.review}}
      </div>
     </div> 

     <br>
     <br>
     <button @click="handleUpdate" class="btnSubmitRating" >Submit rating</button>
     <br>
     <br>
    </div>
      
   </div>
</template>

<script setup>
//imports
import NavBar from '@/components/NavBar.vue'
import { ref, reactive, onMounted } from 'vue'
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
const customers = ref() 
const review = ref()
const customerId = ref()

//get customer from db by using query to match to correct customer Uid (unique customer id)
const colRef = collection(db, 'customers')
const q = query(colRef, where( 'userUid', '==', user.value.uid))
 
  onSnapshot(q, (snapshot) => { 
      let docs = []   
      snapshot.docs.forEach(doc => { docs.push({ ...doc.data(), id: doc.id }) })           
         
         customers.value = docs
         customerId.value = customers.value.map((customerId) => customerId.id)
         //console log below was used to see value of customer is in json
         //console.log('json',JSON.parse(JSON.stringify(customerId.value)))             
      })  
  
 const handleUpdate = async () => {
  const docRef = doc(db, 'customers', customerId.value[0] )  
  await updateDoc(docRef, {
    review: review.value,
      
  })
  confirm('Submitted')
  router.push('/')
}

</script>

<style scoped>
.myCard {
  background-color: rgb(248, 247, 242);
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 95%;
  height: 100%;  
  font-family:Arial, Helvetica, sans-serif;
  padding: 2px 26px;
  margin-left: 20px; 
}
#tableStyle {
  border-collapse: collapse;
  width: 80%;  
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
  background-color: #f0eeed7d;
  color: rgb(0, 0, 0);
}
.heading {
  margin-top: 2%;   
}
.btnSubmitRating{
  background-color: rgb(179, 210, 224);
  border-radius: 5px;
  border: 0;
}    
</style>