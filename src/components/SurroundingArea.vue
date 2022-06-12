<template>

    <div class="myCard">
        <h4>Surrounding area activities</h4>
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
  background-color: rgba(94, 94, 94, 0.068);
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;  
  width: 95%;
  height: 100%;  
  font-family:Arial, Helvetica, sans-serif;
  font-size: 120%;
  padding-top: 1%;  
  padding-left: 1%;
  margin-left: 20px;  
}
.myCard:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.linkMatrix { 
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  padding-left: 10%;
  padding-bottom: 3%;  

}

</style>