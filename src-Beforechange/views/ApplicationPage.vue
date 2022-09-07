<template>
<div class="grid-container">
  <div class="item1"> <NavBar /> </div>
  <div class="item2">  <MainCarousal /> </div>
  <div class="item3">  <ApplicationForm /> </div> 
  <div class="item6"> <Foot /> </div>
</div>

</template>

<script setup>

//imports

import NavBar from '../components/NavBar.vue'
import MainCarousal from '../components/MainCarousal.vue'
import ApplicationForm from '../components/ApplicationForm.vue'
import Foot from '../components/Footer.vue'

// getCustomers() {

</script>

<style scoped> 
.grid-container {
  display: grid;
  grid-template-areas:
    'Header Header Header Header'   
    '... MainCarousal MainCarousal ...'
    '...  ApplicationForm ApplicationForm ...'  
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
  grid-area: ApplicationForm;
  }

.item4 { 
  grid-area: Footer; 
  }


</style>