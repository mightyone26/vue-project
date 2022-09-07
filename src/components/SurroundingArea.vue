<template>

    <div class="myCard">
      <hr>
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
  width: 100%;
  height: 100%;  
  font-family: 'Lexend Deca', sans-serif;
  padding: 2% 2%;  
}
.linkMatrix { 
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  padding-left: 5%;
  padding-bottom: 1%;
}
@media only screen and (max-width: 768px) {
   .linkMatrix { 
  display: grid;
  grid-template-columns: 1fr 1fr ;
  gap: 10px;
  padding-left: 2%;
  width: 100%; 
}
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px){
  
}
</style>