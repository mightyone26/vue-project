<template>
<div class="carRoom">
<div v-for="room in room" :key="room.id">    
 
    <div class="card" style="width: 18rem;" >
    <img :src="room.url" class="card-img-top" alt="room pic" >
    <div class="card-body"  >
       <p class="card-text">{{room.description}}</p>        
    </div>
    </div>
    </div>
</div>

</template>

<script setup>    

    const room = [{
        id: "1",
        description: "Southern Rooms",
        url: "/src/assets/imagesRooms/pexels1268871.jpg"      
    },
    {
        id: "2",
        description: "Nothern Rooms",
        url: "src/assets/imagesRooms/pexels-asad-photo-maldives-1450363.jpg"
    },
    {
        id: "3",
        description: "Western Rooms",
        url: "src/assets/imagesRooms/pexels-leonardo-rossatti-2598638.jpg"
    },
    {
        id: "4",
        description: "Eastern Rooms",
        url: "src/assets/imagesRooms/pexels-vincent-gerbouin-1179156.jpg"
    },
    ];
    

</script>

<style>

.carRoom {
    display: flex;
    flex-direction:row ;
    justify-content:space-evenly;   
}

</style>