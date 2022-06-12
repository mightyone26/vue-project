<template>

<div class="grid-container">
  <div class=" item1"><NavBar /></div>
  <div class=" item2"><PictureModal /></div>
  <div class=" item3"><About /></div>
  <div class=" item4"><Booking /></div>
  <div class=" item5"><Reviews /></div>
  <div class=" item6" ><Maps /></div>
  <div class=" item7" ><ThingsToKnow /></div>
  <div class=" item8" ><SurroundingArea /></div>
  <div class=" item9"><Foot /></div> 

</div>

</template>

<script setup>

//imports
import NavBar from '@/components/NavBar.vue'
import PictureModal from '@/components/PictureModal.vue'
import Booking from '@/components/Booking.vue'
import About from '@/components/About.vue'
import Reviews from '@/components/Reviews.vue'
import Maps from '@/components/MapsGoogle.vue'
import ThingsToKnow from '@/components/ThingsToKnow.vue'
import SurroundingArea from '@/components/SurroundingArea.vue'
import Foot from '@/components/Footer.vue'


</script>

<style scoped> 
.grid-container {   
  display: grid; 
  grid-template-columns: 65% auto;
  /* grid-template-rows: auto; */
  gap: 45px;
  background-color: #ffffff;  
}
.item1 {
  grid-column: 1 / -1;
  grid-row: 1;
}
.item2 {
  grid-column: 1 / -1;
  grid-row: 2;
}
.item5 {
  grid-column: 1 / -1;
  grid-row: 4;
}
.item6 {
  grid-column: 1 / -1;
  grid-row: 5;
}
.item7 {
  grid-column: 1 / -1;
  grid-row: 6;
}
.item8 {
  grid-column: 1/ -1;
  grid-row: 7;
}
.item9 {
  grid-column: 1/ -1;
  grid-row: 8;
}

</style>