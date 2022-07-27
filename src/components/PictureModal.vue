<template>

  <div>
      <p class="homeDescriptionTitle">Ocean Views, 6+ bedroom, Heated Pool, Gamesroom, 5 Minute Walk to the Beach</p> 
  </div>
 
  <div class="grid-container">
    <div class=" item1"> <img src="../assets/Home/Picture3.png  " ></div>
    <div class=" item2"> <img src="../assets/Home/Picture1.png  " ></div>
    <div class=" item3"> <img src="../assets/Home/Picture9.png  " ></div>  
    <div class=" item4"> <img src="../assets/Home/Picture4.jpg  " ></div>
    <div class=" item5"> <img src="../assets/Home/Picture5.png  " ></div>
    <br>
     <!-- Button trigger modal -->
    <button class="btnSeeMore" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <p>See more images</p> 
    </button>
  </div>
  <br>  

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

</template>

<script setup>

</script>

<style scoped>
.homeDescriptionTitle{
    text-align: center;
    padding: 2% 0% 2% 0%;
    font-size: 150%;
}
.grid-container {
  display: grid;
  grid-template-rows: 200px 200px;
  gap: 1px; 
  background-color: #ffffff; 
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
  background-color: rgb(210, 231, 240);
  border-radius: 5px;
  border: 0;  
  margin-left: 50%;
  height: 25px;    
}
.btnSeeMore:hover {
  box-shadow: 0 1px 6px 0 rgba(91, 165, 255, 0.781);
}   
@media only screen and (max-width: 600px){
.homeDescriptionTitle{  
  font-size: 100%;
  text-align: center;
  padding: 0 2% 2% 2%;
  width: 100%;  
  height: 100%;  
  background-color: #ffffff;
}
.grid-container {
  display: grid;
  grid-template-rows:auto;  
  background-color: #ffffff; 
  padding: 1% 5% 0% 5%;
  width: 100%;  
  height: 80%;
  /* margin-left: 20px; */
}
/* .model-grid-container {
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 10px; 
  background-color: #ffffff; 
  padding: 0 5% 0 5%;
}
*/
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
  background-color: rgb(210, 231, 240);
  border-radius: 5px;
  border: 0;  
  margin-left: 1%;
  height: 25px; 
  width: 100%;       
}
}
</style>