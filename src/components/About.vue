<template>

  <div class="myCard"> 
            
      <h3>About</h3>  
      <br>
      <div class="cardData">
      <fa icon="umbrella-beach" /> <strong><i>136 Beach rd, BeachVille, BeachTown</i></strong> 
      <p>Stunning ocean views. Lorem ipsum d Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, cumque? Maiores sequi nam consequuntur consectetur. Animi reiciendis suscipit maiores voluptates, provident necessitatibus odit, saepe pariatur fuga commodi, sunt facilis magnam ad iusto voluptatibus beatae. Aliquam rem distinctio recusandae praesentium ad perferendis, dolorum, aut eum vero, sint minus expedita ut labore amet consequatur. Voluptatibus itaque alias rem ipsa quos incidunt quis esse obcaecati nesciunt aliquid placeat blanditiis, porro nemo, corrupti enim eos non deleniti distinctio inventore reiciendis quaerat soluta voluptate sapiente. Suscipit quos quod nam quibusdam consectetur corporis eos incidunt sint, natus eligendi laborum, beatae inventore ullam doloremque explicabo, facilis itaque. olor, sit amet consecous.</p>
      <hr>
      <div class="gridContainer">      
        <div class="leftList" >
          <ul >
            <li><fa icon="wifi" />  &nbsp; Free Wifi</li>
            <li><fa icon="car" />  &nbsp; Free Parking</li>
            <li><fa icon="fan" />  &nbsp; Air Conditioning</li>
            <li><fa icon="utensils" />  &nbsp; All Utensils</li>
            <li><fa icon="coffee" />  &nbsp; Coffee Maker</li>            
            <li><fa icon="newspaper" />  &nbsp; Dishwasher</li>
          </ul>
       </div>    
       <div class="rightList" >
          <ul >
            <li><fa icon="square-virus" /> &nbsp; Washing Machine</li>
            <li><fa icon="table-cells" />  &nbsp; Dryer</li>
            <li><fa icon="tv" />  &nbsp; Television</li>
            <li><fa icon="hand-lizard" />  &nbsp; Hair Dryer</li>
            <li><fa icon="hands-bubbles" />  &nbsp; Soap, Shampoo</li>
            <li><fa icon="bacon" />  &nbsp; Breakfast Provided</li>
          </ul>
        </div>
      </div> 
    </div>
  </div> 

</template>

<script setup>

</script>

<style scoped>
.myCard {  
  width: 100%;
  height: 100%;  
  font-family: 'Lexend Deca', sans-serif;  
  padding: 5% 5%;   
  background-color: rgb(255, 255, 255);
}
.cardData{
  padding-left: 20px;
}
.gridContainer {
  display: grid;    
}
.leftList{
  grid-column: 1 / span 1;
  grid-row: 1; 
  font-size: 90%;
  margin-left: -30px; 
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
  color: rgba(4, 4, 4, 0.804);
}  

@media only screen and (max-width: 600px){
.gridContainer {
  font-size: 80%; 
}
.cardData{
  padding-left: 0px;
}
} 
</style>