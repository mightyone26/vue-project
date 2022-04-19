<template>
<div v-for="room in room" :key="room.id">
    
 
    <div class="card" style="width: 18rem;" >
    <img src="{{room.pic}}" class="card-img-top" alt="room pic">
    <div class="card-body"  >
        <p class="card-text">{{room.description}}</p>
    </div>
    </div>
</div>
<div>Room carousal component</div>
 

</template>

<script setup>

    

    const room = [{
        id: "1",
        description: "Southern Rooms",
        pic: "@/assets/RoomPictures/pexels-asad-photo-maldives-1268871.jpg"
    },
    {
        id: "2",
        description: "Nothern Rooms",
        pic: "@/assets/RoomPictures/pexels-asad-photo-maldives-1450363.jpg"
    },
    {
        id: "3",
        description: "Western Rooms",
        pic: "@/assets/RoomPictures/pexels-leonardo-rossatti-2598638.jpg"
    },
    {
        id: "4",
        description: "Eastern Rooms",
        pic: "@/src/assets/RoomPictures/pexels-vincent-gerbouin-1179156.jpg"
    },
    ];
    




</script>