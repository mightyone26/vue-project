<template>
  <div class="myCard">
     <h5>Reviews</h5>
     <div>
      <table >
        <thead>
          <tr>      
            <th scope="col">Name</th>
            <th scope="col">Review</th>
           
          </tr>
        </thead>
        <tbody>   
          <tr v-for="customers in customers" :key="customers.id" >     
            <td>{{ customers.firstName }}</td> 
            <td>{{ customers.review }}</td>
            
            <td>
                <el-rate                                  
                  v-model= 'customers.rating '
                  :texts="['oops', 'Disappointed', 'Normal', 'Good', 'Great']"
                  show-text
                  disabled
                />   
            </td>
          </tr>
        </tbody>
      </table>       
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue'
//firebase imports
import { db } from '@/firebase/config'
import { collection, getDocs, onSnapshot } from "firebase/firestore"

const customers = ref()
const colRef = collection(db, 'customers')
 
  onSnapshot(colRef, (snapshot) => { 
      let docs = []   
      snapshot.docs.forEach(doc => { docs.push({ ...doc.data(), id: doc.id }) }) 
      customers.value = docs   
      })  
  
</script>

<style scoped>
.myCard {
  background-color: rgb(248, 238, 238);
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 95%;
  height: 100%;  
  font-family:Arial, Helvetica, sans-serif;
  padding: 2px 26px;
  margin-left: 20px; 
}

</style>