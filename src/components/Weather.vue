<template>
  <div class="myCard">
    <h3>Weather on Moturoa Island NZ</h3>
    <br>    
    <p>Temperature {{temp}}&#8451;</p>
    <p>Wind {{wind}}km</p>
    <p>Humidity {{humidity}}%</p>
    <p>Cloud: {{clouds}}</p>
  </div>
</template>

<script setup>

import axios from 'axios'
import { ref } from 'vue' 

const temp = ref()
const wind = ref()
const humidity = ref()
const clouds = ref()

axios.get('https://api.openweathermap.org/data/2.5/weather?lat=-35.2821&lon=174.0910&units=metric&appid=748ad21f2c5cfd54fdf76912d8aaa9e1').then((res) => {  
        temp.value = res.data.main.temp.toFixed()
        wind.value = res.data.wind.speed.toFixed()
        humidity.value = res.data.main.humidity.toFixed()
        clouds.value = res.data.weather[0].description
        console.log('weather', res.data)
      });

</script>

<style scoped>
.myCard {  
  box-shadow: 1px 1px 10px 1px rgba(116, 116, 116, 0.2); 
  width: 100%;
  height: 100%;  
  font-family:Arial, Helvetica, sans-serif;
  padding: 2px 26px;
  border-radius: 5px;
  background-color: rgb(255, 255, 255);
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (max-width: 768px) {
  
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
  margin-left: 0%;
  background-color: rgb(253, 253, 253);
}
}
</style>