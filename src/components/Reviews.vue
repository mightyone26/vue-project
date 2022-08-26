<template>
  <div class="myCard">
     <h3>Reviews</h3>     
     <div  v-for="customers in customers" :key="customers.id">     
      <div v-if="customers.review">
      <br>
      <h6><b>{{ customers.firstName }}</b></h6> <i>{{ customers.review }}</i>
      </div>     
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
  box-shadow: 1px 1px 10px 1px rgba(116, 116, 116, 0.2);  
  width: 100%;
  height: 300px;  
  font-family:Arial, Helvetica, sans-serif;
  padding: 2px 26px;
  border-radius: 5px;
  overflow-y: scroll;
  scrollbar-width: thin;
  
}
::-webkit-scrollbar {
  width: 5px;
  height: 100%;
  background-color: rgb(189, 189, 189); /* or add it to the track */
}
::-webkit-scrollbar-thumb {
  background:  rgb(103, 100, 100);
}
</style>