<template>
  <div class="myCard">
    <h1>Live Weather</h1>
     
     <!-- <div  v-for="axGet in axGet" :key="axGet.id">  
      <h4>{{axGet.name}}</h4>      
      <h4>{{axGet.main}}</h4> 
      <h4>{{ axGet.temp }}</h4>
      <h4>{{axGet.temp_min}}</h4> 
      <h4>{{axGet.humidity}}</h4>  -->
    <h4>Temperature {{temp}}dergree celisus</h4>
    <h4>Wind {{wind}}km</h4>
      

      <!-- <img :src="axGet.avatar" > -->
     <!-- </div> -->
  
  </div>
</template>

<script setup>

import axios from 'axios'
import { ref } from 'vue' 

const temp = ref()
const wind = ref()


axios.get('https://api.openweathermap.org/data/2.5/weather?lat=-35.2821&lon=174.0910&units=metric&appid=748ad21f2c5cfd54fdf76912d8aaa9e1').then((res) => {        
       
        temp.value = res.data.main.temp
        wind.value = res.data.wind.speed
        console.log('weather', res.data)
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