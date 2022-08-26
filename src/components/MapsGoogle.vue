<template>
    
   <div class="myCard"> 
    <GoogleMap api-key="AIzaSyAtj2uLMHeN-Ik4XIfpcbRamIqfHqKCTyA" style="width: 100%; height: 300px" :center="center" :zoom="13">
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
  box-shadow: 1px 1px 10px 1px rgba(116, 116, 116, 0.2);  
  width: 95%;
  height: 100%;  
  padding: 1% 1%;
  border-radius: 5px;  
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .myCard {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 100%;  
  height: 100%;
  font-family:Arial, Helvetica, sans-serif;
  padding: 1% 1%;
  margin-left: 0px;
  background-color: rgb(255, 255, 255);
}
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 600px) {
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