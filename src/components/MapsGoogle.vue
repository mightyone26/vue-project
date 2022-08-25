<template>
    
    <div class="myCard">
       
        <iframe title="Embedded google map" width="100%" height="100%" id="gmap_canvas"
            src="https://maps.google.com/maps?q=bay%20of%20islands%20new%20zealand&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0" scrolling="yes" marginheight="0" marginwidth="0" >
        </iframe>

    </div>
    
</template>

<script>

</script>

<style scoped>
.myCard {
  box-shadow: 1px 1px 10px 1px rgba(116, 116, 116, 0.2);  
  width: 95%;
  height: 100%;  
  padding: 1% 1%;
  border-radius: 5px;  
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .myCard {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 100%;  
  height: 100%;
  font-family:Arial, Helvetica, sans-serif;
  padding: 1% 1%;
  margin-left: 0px;
  background-color: rgb(255, 255, 255);
}
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 600px) {
  .myCard {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 100%;  
  height: 100%;
  font-family:Arial, Helvetica, sans-serif;
  padding: 4% 2%;
  margin-left: 0px;
  background-color: rgb(255, 255, 255);
}
}
/* Extra small devices (phones, 600px and down) */
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
}
}
</style>