<template>
  <div class=" navBar"><NavBar /></div>
  <div class="grid-container">   
    <div class=" pictureModal"><PictureModal /></div>
    <div class="about"><About /></div>
    <div class="booking"><Booking /></div>
    <div class=" thingsToKnow" ><ThingsToKnow /></div> 
    <div class="weather" ><Weather /></div> 
    <div class="maps" ><Maps /></div>
    <div class="surroundingArea" ><SurroundingArea /></div>
    <div class="review" ><Reviews /></div>
    <div class="contactUs"><ContactUs /></div>
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
import ContactUs from '@/components/ContactUs.vue'
import Foot from '@/components/Footer.vue'


</script>

<style scoped> 
.grid-container {   
  display: grid; 
  grid-template-columns: 45% auto;  
  gap: 10px; 
  background-color: #12a3d418;
  padding: 20px 40px;
}
.pictureModal {
  grid-column: 1 / -1;
  grid-row: 1;
}
.surroundingArea {
  grid-column: 1/ -1;
  grid-row: 3 ;
}
.thingsToKnow {
  grid-column: 1/ -1;
  grid-row: 5;
}
.foot {
  grid-column: 1/ -1;
  grid-row: 7;
}

@media only screen and (max-width: 768px) {
  .grid-container {
  grid-template-columns:  50% 50%; 
  background-color: #ffffff;
  } 

}

@media only screen and (max-width: 600px){
  .grid-container {   
  grid-template-columns:  auto;  
  gap: 2px;
  padding: 20px 10px;
  background-color: #238bc0;  
}
}
</style>