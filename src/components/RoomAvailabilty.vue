<template>

 
  <div class="itemContainer">
    
     
    <div class="item1">
      <label><b>Check in</b></label>      
      <input id="startDate"  type="date" />
    </div>
    
    
    <div  class="item2"> 
      <label><b>Check out</b></label>        
      <input id="endDate"  type="date" />
    </div>
    
    <div >     
      <button type="button" class="btn btn-outline-dark btn-sm">Check Room Availbility</button>
    </div>
  
  </div>
</template>

<script>

</script>

<style>
.itemContainer {
  display: flex;
  flex-direction: row;

  
 
}
label {
  padding-right: 10px;
}

</style>