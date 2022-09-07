<template>

<div class="myCard">   
    <div>
      <h3 class="titleDecoration"> Things to know</h3>       
    </div>
    <br>
    <div class="gridContainer">
    <div class="leftList">
      <ul class="fa-ul">
        <li><fa icon="wifi" />  &nbsp; Check-in: After 3pm</li>
        <li><fa icon="car" />  &nbsp; Checkout: 11am</li>
        <li><fa icon="fan" />  &nbsp; No smoking</li>
        <li><fa icon="utensils" />  &nbsp; No Pets</li>
        <li><fa icon="coffee" />  &nbsp; No drugs</li>            
        <li><fa icon="newspaper" />  &nbsp; First aid box on site.</li>
      </ul>
    </div>
  
    <div class="rightList">
        <ul class="fa-ul">
          <li><fa icon="square-virus" /> &nbsp; Mobility parking facility</li>
          <li><fa icon="table-cells" />  &nbsp; Accessible toilet and bathroom</li>
          <li><fa icon="tv" />  &nbsp; Accessible pool</li>
          <li><fa icon="hand-lizard" />  &nbsp; Games room </li>
          <li><fa icon="hands-bubbles" />  &nbsp; Smoke alarms</li>
          <li><fa icon="bacon" />  &nbsp; Landland telephone</li>
        </ul>
    </div>
    </div> 
    <br>   
    <div class="cancelPolicy">     
          <p class="fa-ul"> <i>Cancellation policy</i>  is to cancel before 4:00 pm for lorem ipsum, 
          dolor sit amet consectetur adipisicing elit. Repellat voluptas aliquid
          repellendus, excepturi provident? Quas, nemo? Aliquam, eum.
          caused by COVID-19 <fa icon="viruses" />.</p>
          <br>
          <hr> 
    </div>   
</div> 

</template>

<style scoped>
.myCard {    
  width: 100%;
  height: 100%;  
  font-family: 'Lexend Deca', sans-serif;  
  padding: 30px 26px;  
  background-color: rgb(255, 255, 255);  
}
.titleDecoration {   
  padding-left: 1%;  
}
.gridContainer {
  display: grid; 
  /* grid-template-columns: auto auto; */
  padding-left: 3%;
}
.leftList{
  grid-column: 1 / span 1;
  grid-row: 1;
  margin-left: -40px;
  font-size: 90%; 
}
.rightList {
  grid-column: 2 / span 1;
  grid-row: 1;
  font-size: 90%;   
}
li {
  list-style: none;
  padding: 0% 1% 1% 0%;
  inline-size: 100%;
}
hr{
  margin: 0 2%;
}

@media only screen and (max-width: 768px) {
  .myCard { 
  padding: 4% 2%; 
  font-size: 100%;
}
.leftList{ 
  margin-left: -25px;
}
.rightList {  
  padding-right: 0%; 
  margin-left: -25px;
  margin-top: 0px;
}
.cancelPolicy { 
  margin-left: -25px;
}
}

@media only screen and (max-width: 600px){
 
li { 
  font-size: 70%;
}
}
</style>