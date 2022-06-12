<template>
  <NavBar />

   <div >
    <table class="table"  >
      <thead>
        <tr>      
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">email</th>
          <th scope="col">phone</th>
        </tr>
      </thead>
      <tbody>   
        <tr v-for="customers in customers" :key="customers.id" >     
          <td>{{ customers.firstName }}</td> 
          <td>{{ customers.lastName }}</td>
          <td>{{ customers.email}}</td>
          <td>{{ customers.phone}}</td>     
                   
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