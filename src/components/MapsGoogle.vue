<template>
    
   <div class="myCard"> 
    <GoogleMap api-key="AIzaSyAtj2uLMHeN-Ik4XIfpcbRamIqfHqKCTy" style="width: 100%; height: 300px" :center="center" :zoom="13">
      <Marker :options="{ position: center }" />
    </GoogleMap>       
   </div>
    
</template>

<script setup>

//vue imports
import { defineComponent } from "vue"
import { GoogleMap, Marker } from "vue3-google-map"

 const center = { lat: -35.2103 , lng: 174.0783  }

</script>

<style scoped>
.myCard {   
  width: 100%;
  height: 100%;  
  padding: 1% 8%; 
}

@media only screen and (max-width: 768px) {
 
}

@media only screen and (max-width: 600px){
  .myCard {
  width: 100%; 
  padding: 4% 2%;  
}
}
</style>
