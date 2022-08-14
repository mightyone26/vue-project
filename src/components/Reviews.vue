<template>
  <div class="myCard">
     <h5>Reviews</h5>
     <div  v-for="customers in customers" :key="customers.id">
        <h6><b>{{ customers.firstName }}</b></h6> <i>{{ customers.review }}</i> 
        
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
  width: 100%;
  height: 100%;  
  font-family:Arial, Helvetica, sans-serif;
  padding: 2px 26px;
  margin-left: 20px; 
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .myCard {
  background-color: rgb(255, 255, 255);
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 100%;
  height: 100%;  
  font-family:Arial, Helvetica, sans-serif;
  padding: 2px 26px;
  margin-left: 0px;  
}
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 600px){
.myCard {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 100%;  
  height: 100%;
  font-family:Arial, Helvetica, sans-serif;
  padding: 4% 2%;
  margin-left: 0px;
  background-color: rgb(255, 255, 255);
}
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px){
.myCard {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 100%;  
  height: 100%;
  font-family:Arial, Helvetica, sans-serif;
  padding: 4% 2%;
  margin-left: 0px;
  background-color: rgb(255, 255, 255);
}
}
</style>