<template>

  <div class="myCard"> 
    <h3>Contact us </h3>
    <br>           
    <p>John and Jane Doe</p>
    <p>Email: paradiseresort@nowhere.com</p>
    <p>Fax: 123456</p>
    <p>Phone: 789101112</p>
    <p>Mail to: PO Box 12345, Nowhere, 1234</p>
  </div> 

</template>

<style scoped>
.myCard {
  box-shadow: 1px 1px 10px 1px rgba(116, 116, 116, 0.2); 
  width: 100%;
  height: 100%;  
  font-family:Arial, Helvetica, sans-serif;  
  padding: 2px 20px;  
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
}
@media only screen and (max-width: 600px){
  .myCard {
  width: 100%; 
  padding: 4% 2%;  
}
}

</style>