<template>
  <div class="myCard">
   
     <!-- <div class="wrapper"> -->
    <div class="wrapper">
      <input type="radio" name="rate" id="rate1">
      <label for="rate1"></label>
      <input type="radio" name="rate" id="rate2">
      <label for="rate2"></label>
      <input type="radio" name="rate" id="rate3">
      <label for="rate3"></label>
      <input type="radio" name="rate" id="rate4">
      <label for="rate4"></label>
      <input type="radio" name="rate" id="rate5">
      <label for="rate5"></label>
   </div>
      <!-- </div> -->
       <h5>Jack</h5>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis nihil nulla officia asperiores, laboriosam expedita soluta amet dicta doloremque deleniti?</p>
     
      <h5>Jack</h5>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis nihil nulla officia asperiores, laboriosam expedita soluta amet dicta doloremque deleniti?</p>
      <!-- <div class="wrapper"> -->
    <div class="wrapper">
      <input type="radio" name="rate" id="rate1">
      <label for="rate1"></label>
      <input type="radio" name="rate" id="rate2">
      <label for="rate2"></label>
      <input type="radio" name="rate" id="rate3">
      <label for="rate3"></label>
      <input type="radio" name="rate" id="rate4">
      <label for="rate4"></label>
      <input type="radio" name="rate" id="rate5">
      <label for="rate5"></label>
   </div>
      <!-- </div> -->

  </div>
</template>

<script setup>

</script>

<style scoped>
.myCard {
  background-color: rgba(94, 94, 94, 0.068);
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 95%;
  height: 100%;  
  font-family:Arial, Helvetica, sans-serif;
  padding: 2px 26px;
  margin-left: 20px; 
}
* {
	margin: 0;
	padding: 0;
}
body {
	background: beige;
}
.wrapper {
	/* position: absolute;
	top: 50%;
	left: 50%; */
	transform: translate(-94%, -10%) rotateY(180deg);
	display: flex;
}
.wrapper input {
	display: none;
}
.wrapper label {
	display: block;
	cursor: pointer;
	width: 20px;
}
.wrapper label:before {
	content: '★';
	position: relative;
	display: block;
	font-size: 25px;
	color: rgb(207, 205, 205);
}
.wrapper label:after {
	content: '★';
	position: absolute;
	display: block;
	font-size: 25px;
	color: rgb(210, 5, 152);
	top: 0;
	opacity: 0;
	transition: .6s;
}
.wrapper label:hover:after, .wrapper label:hover~label:after, .wrapper input:checked~label:after {
	opacity: 1;
}


</style>