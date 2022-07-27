<template>

<div class="myCard">     
  
    <div>
      <strong class="titleDecoration"><fa icon="lightbulb" /> Things to know</strong>       
    </div>
    <br>
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
          <li><fa icon="hand-lizard" />  &nbsp; Games room (pool, table tennis, board games)</li>
          <li><fa icon="hands-bubbles" />  &nbsp; Smoke alarms</li>
          <li><fa icon="bacon" />  &nbsp; Landland telephone</li>
        </ul>
    </div> 
    <br>   
    <div class="cancelPolicy">
      <ul class="fa-ul">
          <li> <i>Cancellation policy</i>  is to cancel before 4:00 pm for lorem ipsum, 
          dolor sit amet consectetur adipisicing elit. Repellat voluptas aliquid
          repellendus, excepturi temporibus id provident? Quas, nemo? Aliquam, eum.
          caused by COVID-19 <fa icon="viruses" />.</li>
                      
      </ul>
    </div>    
   
</div> 

</template>

<script setup>

</script>

<style scoped>
.titleDecoration {  
  width: 14%;
  border: 0;
  border-radius: 25px;
  padding-left: 1%;
  font-size: 100%;
  text-decoration: underline;
}
.myCard {  
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;  
  width: 95%;
  height: 100%;  
  font-family:Arial, Helvetica, sans-serif;
  font-size: 120%;
  padding-top: 1%; 
  margin-left: 20px;
  background-color: rgb(255, 255, 255);  
}
.myCard:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.breakText {  
  padding-left:1vw
}
 .leftList{
  float: left;
  padding: 2% 5%;
  text-align: left;
}
.rightList {
  float: right;
  padding-top: 2%;
  padding-right: 15%;
  text-align: left;  
}
.cancelPolicy {
  float: left;
}
@media only screen and (max-width: 600px){
  .myCard {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 100%;  
  height: 100%;
  font-family:Arial, Helvetica, sans-serif;
  padding: 4% 2%;
  margin-left: 0px;
  background-color: rgb(255, 255, 255);
  font-size: 80%;
}
.leftList{
  float: left;
  padding: 0%;
  text-align: left;
  margin-left: -25px;
}
.rightList {
  float: left;
  padding-top: 0%;
  padding-right: 0%;
  text-align: left;
  margin-left: -25px;
  margin-top: -15px;
}
.cancelPolicy {
  float: left;
  margin-left: -25px;
}

}
</style>