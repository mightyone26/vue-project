<template>

  <div class="myCard"> 
      
      <form>   
          <div class="breakText">
            <br>
            <h3>About</h3>
            <br>
            <fa icon="umbrella-beach" /> <strong><i>136 Beach rd, BeachVille, BeachTown</i></strong> 
            <p>Stunning ocean views. Lorem ipsum d Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, cumque? Maiores sequi nam consequuntur consectetur. Animi reiciendis suscipit maiores voluptates, provident necessitatibus odit, saepe pariatur fuga commodi, sunt facilis magnam ad iusto voluptatibus beatae. Aliquam rem distinctio recusandae praesentium ad perferendis, dolorum, aut eum vero, sint minus expedita ut labore amet consequatur. Voluptatibus itaque alias rem ipsa quos incidunt quis esse obcaecati nesciunt aliquid placeat blanditiis, porro nemo, corrupti enim eos non deleniti distinctio inventore reiciendis quaerat soluta voluptate sapiente. Suscipit quos quod nam quibusdam consectetur corporis eos incidunt sint, natus eligendi laborum, beatae inventore ullam doloremque explicabo, facilis itaque. olor, sit amet consecous.</p>
          </div>
          <br>       
          <div class="leftList" >
            <ul class="fa-ul">
              <li><fa icon="wifi" />  &nbsp; Free Wifi</li>
              <li><fa icon="car" />  &nbsp; Free Parking</li>
              <li><fa icon="fan" />  &nbsp; Air Conditioning</li>
              <li><fa icon="utensils" />  &nbsp; All Utensils</li>
              <li><fa icon="coffee" />  &nbsp; Coffee Maker</li>            
              <li><fa icon="newspaper" />  &nbsp; Dishwasher</li>
            </ul>
          </div>
        
          <div class="rightList" >
            <ul class="fa-ul">
              <li><fa icon="square-virus" /> &nbsp; Washing Machine</li>
              <li><fa icon="table-cells" />  &nbsp; Dryer</li>
              <li><fa icon="tv" />  &nbsp; Television</li>
              <li><fa icon="hand-lizard" />  &nbsp; Hair Dryer</li>
              <li><fa icon="hands-bubbles" />  &nbsp; Soap, Shampoo</li>
              <li><fa icon="bacon" />  &nbsp; Breakfast Provided</li>
            </ul>
          </div>     
      </form>
       
  </div> 

</template>

<script setup>

</script>

<style scoped>
.myCard {
  box-shadow: 1px 1px 10px 1px rgba(116, 116, 116, 0.043);   
  width: 100%;
  height: 100%;  
  font-family:Arial, Helvetica, sans-serif;  
  font-size: 120%;
  padding: 2px 2px;  
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
}
.breakText { 
  padding-left:1vw
}      
.leftList{
  float: left;
  /* padding: 2% 5%; */
  text-align: left;
  font-size: 90%;
}
.rightList {
  float: right;
  /* padding-top: 2%; */
  /* padding-right: 10%; */
  text-align: left;
  font-size: 90%;  
}
li {
  padding: 0% 5% 5% 0%;
  inline-size: 250px;
}
@media only screen and (max-width: 1280px) {
   .myCard {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 100%;  
  height: 100%;
  font-size: 100%;
  font-family:Arial, Helvetica, sans-serif;  
  margin-left: 0px;  
  background-color: rgb(255, 255, 255);
  padding: 0px 10px;  
}
.leftList{
  float: left;  
  text-align: left;
  font-size: 95%;
  padding: 0% 0%;
}
.rightList {
  float: right;    
  text-align: left;
  font-size: 95%;
  padding-top: 0%;
  padding-right: 5%; 
}
li {
  padding: 0% ;
  inline-size: 200px;
  margin-left: -30px;
}
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (max-width: 992px) {
   .myCard {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 100%;  
  height: 100%;
  font-size: 100%;
  font-family:Arial, Helvetica, sans-serif;  
  margin-left: 0px;  
  background-color: rgb(255, 255, 255);
  padding: 0px 10px;
}
.leftList{
  float: left;  
  text-align: left;
  font-size: 100%;
  padding: 0% 0%;
}
.rightList {
  float: left;    
  text-align: left;
  font-size: 100%;
  padding-top: 0%;
  padding-right: 30%;
  margin-top: -15px;  
}
li {
  padding: 0% ;
  inline-size: 200px;
  margin-left: -30px;
}
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (max-width: 768px){
  .myCard {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 100%;  
  height: 100%;
  font-size: 100%;
  font-family:Arial, Helvetica, sans-serif;  
  margin-left: 0px;  
  background-color: rgb(255, 255, 255);
  padding: 0px 10px;
}
.leftList{
  float: left;  
  text-align: left;
  font-size: 100%;
  padding: 0% 0%;
}
.rightList {
  float: left;    
  text-align: left;
  font-size: 100%;
  padding-top: 0%;
  padding-right: 30%;
  margin-top: -15px;  
}
li {
  padding: 0% ;
  inline-size: 200px;
  margin-left: -30px;
}
/* Extra small devices (phones, 600px and down) */
}
@media only screen and (max-width: 600px){
  .myCard {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 100%;  
  height: 100%;
  font-size: 100%;
  font-family:Arial, Helvetica, sans-serif;  
  margin-left: 0px;  
  background-color: rgb(255, 255, 255);
  padding: 0px 10px;
}
.leftList{
  float: left;  
  text-align: left;
  font-size: 100%;
  padding: 0% 0%;
}
.rightList {
  float: left;    
  text-align: left;
  font-size: 100%;
  padding-top: 0%;
  padding-right: 0%;
  margin-top: -15px;  
}
li {
  padding: 0% ;
  inline-size: 200px;
  margin-left: -30px;
}
}
</style>