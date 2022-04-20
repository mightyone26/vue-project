<template>
<div class="grid-container">
  <div class="item1"> <navBar /> </div>
  <div class="item2">  <mainCarousal /> </div>
  
  <div class="item3"> <RoomAvailabilty /> </div>  
  <div class="item4"> <RoomCarousal /> </div>
  
  <div class="item5"> <About /> </div>
  <div class="item6"> <Foot /> </div>
</div>

</template>

<script setup>

//imports

import NavBar from '@/components/NavBar.vue'
import MainCarousal from '@/components/MainCarousal.vue'
import RoomAvailabilty from '@/components/RoomAvailabilty.vue';
import RoomCarousal from '@/components/RoomCarousal.vue';
import About from '@/components/About.vue';
import Foot from '@/components/Footer.vue'



</script>

<style> 



.grid-container {
  display: grid;
  grid-template-areas:
    'Header Header Header Header'   
    '...  MainCarousal MainCarousal ...'
    '...  RoomAvailabilty RoomAvailabilty ...'
    '...  RoomCarousal RoomCarousal ...'   
    '...  About About ...'
    'Footer Footer Footer Footer';
    gap: 20px;
  
}

.item1 { 
  grid-area: Header; 
  }

.item2 {
  grid-area: MainCarousal; 
  }

.item3 { 
  grid-area: RoomAvailabilty;
  }

.item4 {
  grid-area: RoomCarousal; 
  }
.item5 { 
  grid-area: About; 
  }
.item6 { 
  grid-area: Footer; 
  }


</style>