<template>
  <div class="myCard">
    <div class="cardData">
      <h3>Reviews</h3>     
      <div  v-for="customers in customers" :key="customers.id">     
        <div v-if="customers.review">
        <br>
        <div>{{ customers.firstName }}</div> <i>{{ customers.review }}</i>
        </div>     
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
  width: 100%;
  height: 300px;  
  font-family: 'Lexend Deca', sans-serif;
  padding: 30px 26px; 
  overflow-y: scroll;
  scrollbar-width: thin;
  background-color: rgb(255, 255, 255);
}
.cardData{
  padding-left: 20px;
}
::-webkit-scrollbar {
  width: 5px;
  height: 100%;
  background-color: rgb(189, 189, 189); /* or add it to the track */
}
::-webkit-scrollbar-thumb {
  background:  rgb(103, 100, 100);
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (max-width: 768px) {
 
}
@media only screen and (max-width: 600px){
.myCard { 
  padding: 4% 2%;  
}
}
</style>