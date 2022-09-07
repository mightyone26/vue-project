<template>
<NavBar />
   <table class="table"  >
      <thead>
        <tr>      
          <th scope="col">Room</th>
          <th scope="col">Pictue</th>
          
        </tr>
      </thead>
      <tbody>          
        <tr v-for="rooms in rooms" :key="rooms.id" >     

          <td>{{ rooms.roomType }}</td> 
          <td> <img :src="rooms.url" height="200" > </td>
         
        </tr>
      </tbody>
    </table>    
  <Foot />
</template>

<script setup>

//component imports
import NavBar from '@/components/NavBar.vue'
import Foot from '@/components/Footer.vue'

//firebase imports
import { db } from '@/firebase/config'
import { collection, getDocs, getDoc, doc,  onSnapshot, query } from '@firebase/firestore'  

// vue imports
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// data variables
const route = useRoute()
const router = useRouter()
const colRef = collection(db, 'rooms') 
const rooms = ref ('') 

 //(add customers) realtime collection data (onSnapshot takes two values 1. colref which grabs db info and 2. function that put db data into loop which pushes data to customers array variable)  
onSnapshot(colRef, (snapshot) => {
let docs = []
snapshot.docs.forEach(doc => { docs.push({ ...doc.data(), id: doc.id }) })           
    rooms.value = docs         
})
     

</script>

<style>

</style>