<template>

  <h5>Select Checkin and Checkout Dates</h5>
  <div class="availDate">
    
    <label for="startDate">Check in</label> 
    <input id="startDate" class="form-control" type="date" />

    <label for="startDate">Check out</label>
    <input id="startDate" class="form-control" type="date" />

    <button type="button" class="btn btn-outline-secondary">Check Room Availbility</button>
  </div>
</template>

<script>

</script>

<style>
.availDate {
  display: flex;
  flex-direction: row;
}
</style>