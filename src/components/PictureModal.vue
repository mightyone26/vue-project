<template>
  <div class="myCard">
  <div>
      <p class="homeDescriptionTitle">Bed and Breakfast , 6+ bedroom, Heated Pool, 5 Minute Walk to the Beach</p> 
  </div>
 
  <div class="grid-container">
    <div class=" item1"> <img src="../assets/Home/Picture3.png  " ></div>
    <div class=" item2"> <img src="../assets/Home/Picture1.png  " ></div>
    <div class=" item3"> <img src="../assets/Home/Picture9.png  " ></div>  
    <div class=" item4"> <img src="../assets/Home/Picture4.jpg  " ></div>
    <div class=" item5"> <img src="../assets/Home/Picture5.png  " ></div> 
  </div>
   <!-- Button trigger modal -->
  <button class="btnSeeMore" type="button" data-bs-toggle="modal" data-bs-target="#seeMoreModal">
    See more images 
  </button>
  <br>  

<!-- Modal -->
<div class="modal fade" id="seeMoreModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div>       
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="model-grid-container">
        <img src="../assets/Home/Picture3.png  " >
        <img src="../assets/Home/Picture1.png  " >
        <img src="../assets/Home/Picture9.png  " > 
        <img src="../assets/Home/Picture4.jpg  " >
        <img src="../assets/Home/Picture5.png  " >
        <img src="../assets/Home/Picture2.png  " >
        <img src="../assets/Home/Picture6.png  " >
        <img src="../assets/Home/Picture7.png  " >
        <img src="../assets/Home/Picture8.png  " >
        <img src="../assets/Home/Picture10.jpg  " >
      </div> 
  
      </div>      
    </div>
  </div>
</div>
</div>
</template>

<script setup>

</script>

<style scoped>
.myCard {
  background-color: rgb(255, 255, 255);
  box-shadow: 1px 1px 10px 1px rgba(116, 116, 116, 0.03);  
  width: 100%;
  height: 100%;  
  font-family:Arial, Helvetica, sans-serif;
  font-size: 120%;
  padding-top: 1%;  
  padding-left: 1%; 
  border-radius: 5px;
}
.homeDescriptionTitle{
    text-align: center;
    padding: 2% 0% 2% 0%;
    font-size: 150%;
}
.grid-container {
  display: grid;
  grid-template-rows: 200px 200px;
  gap: 5px;   
  padding: 0% 5% 0 5%;
}
.model-grid-container {
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 10px; 
  background-color: #ffffff; 
  padding: 0 5% 0 5%;
}
img {
   border-radius: 1%;
   width:100%;
   height:100%;
   
}
.item1 {
  grid-column: 1 / span 1;
  grid-row: 1; 
}
.item2 {
  grid-column: 2;
  grid-row: 1 / span 1;
}
.item3 {
  grid-column: 3;
  grid-row: 1/ span 2;
}
.item4 {
  grid-column: 1 / span 1;
  grid-row: 2; 
}
.item5 {
  grid-column: 2 / span 1;
  grid-row: 2;
}
.btnSeeMore { 
  background-color: rgb(255, 255, 255);
  border-radius: 3px;
  border: solid 1px;  
  width: 15%; 
  margin: 2% 40%;   
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (max-width: 768px) {
  
.grid-container { 
  grid-template-rows:auto; 
  padding: 1% 5% 0% 5%;  
}
.item1 {
 width: 0px;
}
.item2 {
  grid-column: 0;
  grid-row: 0;
}
.item3 {
  width: 0px;
}
.item4 {
  width: 0px;
}
.item5 {
  width: 0px;
}
.btnSeeMore {
  margin: 1% 33%;    
  width: 30%;       
}
}

@media only screen and (max-width: 600px){

.btnSeeMore { 
  margin: 1% 6%;    
  width: 43%;       
}
}
</style>