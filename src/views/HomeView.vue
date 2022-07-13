<template>

<div class="grid-container">
  <div class=" navBar"><NavBar /></div>
  <div class=" pictureModal"><PictureModal /></div>
  <div><About /></div>
  <div><Booking /></div> 
  <div class="maps" ><Maps /></div>  
  <div class=" thingsToKnow" ><ThingsToKnow /></div>
   <div  ><Reviews /></div>
   <div  ><Weather /></div>
  <div class="surroundingArea" ><SurroundingArea /></div>
  <div class=" foot"><Foot /></div> 

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
import Weather from '@/components/Weather.vue'
import ThingsToKnow from '@/components/ThingsToKnow.vue'
import SurroundingArea from '@/components/SurroundingArea.vue'
import Foot from '@/components/Footer.vue'


</script>

<style scoped> 
.grid-container {   
  display: grid; 
  grid-template-columns: 60% auto;
  /* grid-template-rows: auto; */
  gap: 45px;
  background-color: #ffffff;  
}
.navBar {
  grid-column: 1 / -1;
  grid-row: 1;
}
.pictureModal {
  grid-column: 1 / -1;
  grid-row: 2;
}
/* .about {
  grid-column: 1 / -1;
  grid-row: 3;
} */
.maps {
  grid-column: 1 / -1;
  grid-row: 11/ 21;
}
/* .booking {
  grid-column: 3 / -1 ;
  grid-row: 3;
} */
.thingsToKnow {
  grid-column: 1/ -1;
  grid-row: 10;
}
.surroundingArea {
  grid-column: 1/ -1;
  grid-row: 4 / 9;
}
/* .reviews {
  grid-column: 1/ -1;
  grid-row: 7;
} */
/* .weather {
  grid-column: 1/ -1;
  grid-row: 7;
} */
.foot {
  grid-column: 1/ -1;
  grid-row: 22;
}
</style>