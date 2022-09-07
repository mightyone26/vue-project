<template>
 
  <div class="demo-date-picker">
    <div class="block">
     
      <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator="To"
        start-placeholder="Check-in date"
        end-placeholder="Checkout date"       
        format="DD/MM/YYYY"
         value-format="DD/MM/YYYY"                
      />
  
    <div>     
        <br>  
        <label style="float:left ">Check-in:</label>  &nbsp;
        <label> {{  value1[0] }}</label> 
        <br>
        <br>        
        <label style="float:left">Checkout:</label>  &nbsp;
        <label> {{ value1[1] }}</label> 
        <br>
        <br>         
    </div>
  
   </div>
  </div>
  
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref('')

</script>
<style scoped>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}
.demo-date-picker .block {
  padding: 0px 0;  
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}
.demo-date-picker .block:last-child {
  border-right: none;
}
.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
