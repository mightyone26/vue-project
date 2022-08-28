<template>
   <div class="itemContainer">       
        
        <div class="item1">
                <a href="https://facebook.com">
                <img src="src/assets/imagesFooter/facebookLogo.png" alt="link to facebook" width="20" height="20"> Connect on Facebook</a> 
        </div>
        &nbsp;
        &nbsp;
        &nbsp;
        <div class="item2">
                <a href="https://instagram.com">
                <img src="src/assets/imagesFooter/insta.png" alt="link to instagram" width="20" height="20"> Connect on Instagram</a> 
        </div>  

   </div>   

</template>

<style scoped>
.itemContainer {
    display: flex;
    flex-direction:row ;
    justify-content: center;    
    padding-bottom: 10px;  
    padding-top: 30px;
    background-color: rgb(255, 255, 255);
}
.item1 {
   margin: 0% 0%;
}
.item2 {
   margin: 0% 1%;
}
/* @media only screen and (max-width: 600px){
.itemContainer {
  font-size: 80%;
  width: 100%;
  padding: 10px;   
}
} */
</style>