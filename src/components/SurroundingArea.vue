<template>

    <div class="myCard">
      <h3>Surrounding area activities</h3>
      <br> 
      <div class="linkMatrix">
        <a href="https://www.sydney.com/things-to-do/food-and-drink/drink/pubs">Pub</a>
        <a href="https://www.sbw.org.au/">Hiking</a>
        <a href="https://www.auscycling.org.au/">Cycling</a>
        <a href="https://www.goodfood.com.au/eat-out/restaurant">Restaurants</a>
        <a href="https://manofmany.com/outdoors/best-fishing-spots-sydney">Fishing</a>
        <a href="https://www.wordofmouth.com.au/nsw/sydney/supermarket">Supermarket</a>
        <a href="https://www.sydneyairport.com.au/">Airport</a>
        <a href="https://www.welcomepickups.com/sydney/taxi/">Taxi</a>
         
      </div>
    </div>
    
  
</template>

<script setup>

</script>

<style scoped>
.myCard {
  background-color: rgb(255, 255, 255);
  box-shadow: 1px 1px 10px 1px rgba(116, 116, 116, 0.2);  
  width: 100%;
  height: 100%;  
  font-family:Arial, Helvetica, sans-serif;
  font-size: 120%;
  padding-top: 1%;  
  padding-left: 1%; 
  border-radius: 5px;
}
.linkMatrix { 
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  padding-left: 10%;
  padding-bottom: 3%;
}
/* Medium devices (landscape tablets, 768px and up) */
/* @media only screen and (min-width: 768px) {
  .myCard {
  background-color: rgba(94, 94, 94, 0.068);
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;  
  width: 100%;
  height: 100%;  
  font-family:Arial, Helvetica, sans-serif;
  font-size: 10%;
  padding-top: 1%;  
  padding-left: 10px;
  margin-left: 0px; 
  background-color: rgb(255, 255, 255);
  font-size: 100%;  
}
} */
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (max-width: 768px) {
   .linkMatrix { 
  display: grid;
  grid-template-columns: 1fr 1fr ;
  gap: 10px;
  padding-left: 1%;
  width: 100%; 
}
.myCard {
  background-color: rgba(94, 94, 94, 0.068);
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;  
  width: 100%;
  height: 100%;  
  font-family:Arial, Helvetica, sans-serif;
  font-size: 10%;
  padding-top: 1%;  
  padding-left: 10px;
  margin-left: 0px; 
  background-color: rgb(255, 255, 255);
  font-size: 100%;  
}
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px){
  .linkMatrix { 
  display: grid;
  grid-template-columns: 1fr 1fr ;
  gap: 10px;
  padding-left: 1%;
  width: 100%; 
}
.myCard {
  background-color: rgba(94, 94, 94, 0.068);
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;  
  width: 100%;
  height: 100%;  
  font-family:Arial, Helvetica, sans-serif;
  font-size: 10%;
  padding-top: 1%;  
  padding-left: 10px;
  margin-left: 0px; 
  background-color: rgb(255, 255, 255);
  font-size: 100%; 
}
}
</style>