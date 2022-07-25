<template>
  <div class="myCard">
    <h1>Weather</h1>
     
     <!-- <div  v-for="axGet in axGet" :key="axGet.id">  
      <h4><b>{{axGet.first_name}}</b></h4>
      <h4>{{axGet.email}}</h4>
      <img :src="axGet.avatar" >
     </div> -->
  
  </div>
</template>

<script setup>

import axios from 'axios'
import { ref } from 'vue' 

const axGet = ref()
//748ad21f2c5cfd54fdf76912d8aaa9e1
axios.get('https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={748ad21f2c5cfd54fdf76912d8aaa9e1}').then((res) => {        
        const zxc = res.data     
        axGet.value = zxc.data
        console.log('weather', res)
      });
     

</script>

<style scoped>
.myCard {
  background-color: rgb(248, 238, 238);
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 85%;
  height: 100%;  
  font-family:Arial, Helvetica, sans-serif;
  padding: 2px 26px;
  margin-left: 20px; 
}
@media only screen and (max-width: 600px){
  .myCard {
  background-color: rgb(248, 238, 238);
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 95%;
  height: 100%;  
  font-family:Arial, Helvetica, sans-serif;
  padding: 2px 26px;
  margin-left: 20px; 
}
}
</style>