<template>
  <div class="myCard">
    <h1>Weather</h1>
  </div>
</template>

<script setup>



 
import axios from "axios"

axios.get('https://reqres.in/api/users').then((response) => {
        console.log(response);
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
</style>