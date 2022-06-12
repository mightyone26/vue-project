<template>

<div class="myCard" >       
 
     <h3>Make a Booking</h3>        
       
        <br>
        <label style="float:left ">Check-in</label>
        <input style="float:right" type="date">           
        <br>
        <br>
        
        <label style="float:left">Checkout</label> 
        <input style="float:right " type="date" > 
        <br>
        <br>
        <hr>

    <div>
        <label style="float:left padding-top:10% "> Adult Guests </label> 
        <div style="float:right ">        
            <button class="addGuestButton" :disabled="counterAdults === 0" @click="decreaseCountAdults"> <fa icon="circle-minus" /></button>
            &nbsp; <span >{{ counterAdults }}</span> &nbsp;
            <button class="addGuestButton" :disabled="counterAdults === 6" @click="increaseCountAdults"><fa icon="circle-plus" /></button>
        </div>
    </div>
   
    <hr>
    <div>
        <label style="float:left padding-top:5%"> Under 18 yrs  </label> 
        <div style="float:right ">
        <button class="addGuestButton" :disabled="counterKids === 0" @click="decreaseCountKids"> <fa icon="circle-minus" /></button>
        &nbsp; <span >{{ counterKids }}</span> &nbsp;
        <button class="addGuestButton" :disabled="counterKids === 6" @click="increaseCountKids"> <fa icon="circle-plus" /></button>
        </div>            
    </div>
    <hr>
     <br>     
     <br>
     <label style="float:left ">Total</label>   
     <label style="float:right ">${{costs}}</label>
  
  <br>
  <br>
   <button class="reserveButton" @click="handleSubmit" >Make a reservation</button> 
</div> 



</template>

<script setup>
//vue imports
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

//router imports
const route = useRoute()
const router = useRouter()

//counter adults
const counterAdults = ref(0)

const decreaseCountAdults = () => {
    counterAdults.value--
}
const increaseCountAdults = () => {
    counterAdults.value++
}

//counter kids
const counterKids = ref(0)

const decreaseCountKids = () => {
    counterKids.value--
}
const increaseCountKids = () => {
    counterKids.value++
}

//costing calculations
const costs = computed(() => {
    return (50*counterAdults.value)+(25*counterKids.value)
})

//submit
  const handleSubmit = () => {
    router.push('ApplicationForm')
  }

</script>

<style scoped>
.myCard {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 85%;  
  height: 100%;
  font-family:Arial, Helvetica, sans-serif;
  padding: 4% 2%;
  margin-left: 20px;
}
.myCard:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);  
}
.addGuestButton {    
    border: 0;
    background-color: white;   
}
.reserveButton {    
    background-color: rgb(122, 215, 255);
    border-radius: 5px;
    border: 0;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    width: 100%;
    height: 7%;   
    font-size: 130%;
      
}
input {
    padding-top: 1%;
    padding-right: 10%;
    font-size: 100%;
}
label {
    font-size: 120%;
}
/* span {
    font-size: 70%;
} */

</style>