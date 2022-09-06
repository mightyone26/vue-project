<template>
   <div class="itemContainer">  
      <div >
      <a href="https://facebook.com">
      <img src="@/assets/imagesFooter/facebookLogo.png" alt="link to facebook" width="20" height="20"> Connect on Facebook</a> 
      </div>
      &nbsp;&nbsp;&nbsp;
      <div >
      <a href="https://instagram.com">
      <img src="@/assets/imagesFooter/insta.png" alt="link to instagram" width="20" height="20"> Connect on Instagram</a> 
      </div> 
   </div>   

</template>

<style scoped>
.itemContainer {
    display: flex;
    flex-direction:row ;
    justify-content: center;        
    padding: 3%;  
    background-color: rgb(255, 255, 255);   
    font-family: 'Lexend Deca', sans-serif;   
}

@media only screen and (max-width: 600px){
.itemContainer {
  font-size: 80%;
  padding: 3%;   
}
}
</style>