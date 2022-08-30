<template>

  <div class="myCard"> 
    <h3>Contact us </h3>
    <br> 
    <div class="cardData">          
      <p>John and Jane Doe</p>
      <p>Email: paradiseresort@nowhere.com</p>
      <p>Fax: 123456</p>
      <p>Phone: 789101112</p>
      <p>Mail to: PO Box 12345, Nowhere, 1234</p>
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
.cardData{
  padding-left: 20px;
}
@media only screen and (max-width: 600px){
  .myCard {
  width: 100%; 
  padding: 4% 2%;  
}
}

</style>