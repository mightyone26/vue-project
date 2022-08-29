<template>

  <div class="myCard">    
     
      <div>       
        <h3>About</h3>
        <br>
        <fa icon="umbrella-beach" /> <strong><i>136 Beach rd, BeachVille, BeachTown</i></strong> 
        <p>Stunning ocean views. Lorem ipsum d Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, cumque? Maiores sequi nam consequuntur consectetur. Animi reiciendis suscipit maiores voluptates, provident necessitatibus odit, saepe pariatur fuga commodi, sunt facilis magnam ad iusto voluptatibus beatae. Aliquam rem distinctio recusandae praesentium ad perferendis, dolorum, aut eum vero, sint minus expedita ut labore amet consequatur. Voluptatibus itaque alias rem ipsa quos incidunt quis esse obcaecati nesciunt aliquid placeat blanditiis, porro nemo, corrupti enim eos non deleniti distinctio inventore reiciendis quaerat soluta voluptate sapiente. Suscipit quos quod nam quibusdam consectetur corporis eos incidunt sint, natus eligendi laborum, beatae inventore ullam doloremque explicabo, facilis itaque. olor, sit amet consecous.</p>
      </div>
      <br>
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

</template>

<script setup>

</script>

<style scoped>
.myCard {
  box-shadow: 1px 1px 10px 1px rgb(255, 255, 255);   
  width: 100%;
  height: 100%;  
  font-family:Arial, Helvetica, sans-serif;  
  padding: 4% 5%;  
  border-radius: 3px;
  background-color: rgb(255, 255, 255);
}
.gridContainer {
  display: grid; 
  grid-template-columns: auto auto;
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
/* .leftList{
  float: left;  
  font-size: 90%;
}
.rightList {
  float: right; 
  font-size: 90%;
  margin-top: -222px;  
} */
/* 
 @media only screen and (max-width: 768px){
.leftList{
 margin-top: -5%; 
}
.rightList {
  float: left;   
  padding-top: 0%;
  padding-right: 30%;
  margin-top: -15px;  
}
li { 
  margin-left: -14%; 
}
} 

@media only screen and (max-width: 600px){
.rightList {  
  padding-right: 25%;  
}
} */
</style>