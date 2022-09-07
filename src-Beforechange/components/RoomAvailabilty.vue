<template>

  <div>
    <div class="itemContainer"> 
      <div class="item1">
        <label><b>Check in</b></label>      
        <input id="startDate"  type="date" />
      </div>    
      
      <div  class="item2"> 
        <label><b>Check out</b></label>        
        <input id="endDate"  type="date" />
      </div>  
    </div>
    <br>

    <div class="roomCheckSubmit">     
      <button
        type="button"
        class="btn btn-outline-dark btn-sm"
        @click="linkToAvailableRooms">
        Check Room Availbility
      </button>
    </div>
  </div>
  <br>
  <signup />
  
 
</template>

<script setup>

//imports

import { useRouter } from 'vue-router'
import signup from '@/components/signUp.vue'
const router = useRouter()
const linkToAvailableRooms = () =>{
  router.push({ name : 'AvailableRooms'})
}

</script>

<style>
.itemContainer {
  display: flex;
  flex-direction: row; 
}
label {
  padding-right: 10px;
}
.roomCheckSubmit {
  display: flex;
  justify-content: center;
}

</style>