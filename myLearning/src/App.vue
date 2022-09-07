<template>

 <h3>Object destructured. Variable read from object is phone( {{objectVariable}} )</h3>
 <h3>Array destructured. Variable read from object is number ( {{arrayVariable}} )</h3>
 <h3>{{restOption}}</h3>

</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue' 

//*
//JAVASCRIPT BASICS NOTES
//*
//Creation phase: (HOISTING)
//when a js file is made/created 3 things get make automatically. The global object(window object) , the 'this' variable keyword and the outer enviroment.
//The js parser reads thru the file and allocates memory to variables and functions. This is known as hoisting i.e. variables are
// set to a value of undefined.

//*
//Equality operator (uses cohesion)
//*
// == loose equal vs  strict equal ===
// == uses cohesion to compare two values. Cohesion is when js converts a value to number instance (Number(null) -> 0). When cohesed  
// Number(false) -> is 0, Number(true) -> 1, Number(null) -> 0 ,Number(undefined) -> NaN, Number("3") -> 3
// So when ( false == 0 ) is evaluated to result is true or ("3" == 3) result is true.
//Whereas === evaluates type and value eg. ("3" === 3)-> false etc.... 
//

//*
//TYPES IN JAVASCRIPT
//*

// BOOLEAN, NUMBER, STRING, NULL, UNDEFINED,  OBJECT
// Can use javascript 'typeof'
//eg. typeof(true) is boolen, typeof('a') is string, typeof(3) is number

//=============================================================================================

// BY VALUE AND BY REFERENCE
//By value
//When saying let a = 'Variable Value' then make a = b then JS makes a new space in memory for b. There are to 2 independent spaces in 
//memory. b is equal to 'Variable Value' but if b is changes to 'Variable Value new' then a stays 'Variable value' because a and b both 
//have independent memory space.
//By reference
//whereas if a was a object or function eg. let a = {greeting : 'hi'} and then make a = b . a and b will both point to the same object. So if 
//if the object was updates then both the value of a and b would change to the updated object value.  

//SCOPES AND VARIABLES

//Scope definition - How long a variable lives for before it dies and 
//                   where it is visible and availablity to use in the code.
// *
// DESTRUCTURING OBJECT
// *
const objectVariable = ref()
const myObject = {
        name:'david',
        phone: 45,
        cat: 'white'
      }

    const {name, phone } = myObject //It takes the value of the key and gives it a variable name
                                    //It could be written as const {firstName:name, number:phone} = myObject
                                    //firstName is now equal to david 
                                    //and number equal to 45 
                                    //I used const {name:name, phone:phone} which is equivelant to {name , phone} therefore
                                    //  const name = 'david'
                                    //  const phone = 45  
    objectVariable.value= phone

// *
// DESTRUCTURING ARRAY
// *
const arrayVariable = ref()

const myArray = ['david', 4555555, 46, '3rd']

    const[fname, numbr, ,third] = myArray //similar to object destructuring
                                  //uses brackets [] and destructured variable names can be anything
                                  // , , misses keys
      arrayVariable.value = third

// *
// REST
// *

//collapses a number of elements into an array
//In this example the parameters of an function (I called it functionName) is collapse into an array.
//...options takes the values of the function parameters and collapses them into an array called options. Options is now
//an array with the value of [1,2,3,4, 'two']
const restOption = ref()
const functionName = (...options) => {
  console.log('To demostrate REST operator',options)
  const [one, two ,three, four, q] = options  //I used deconstruction to make array values to variables and then assigned q to ref.value to show in template
  restOption.value = q
}
functionName (1,2,3,4, 'two')

//rest is also used like this
const functionNameRest = (method, ...options) => {
  console.log('Demo Rest1- ',method)
  console.log('Demo Rest2- ',options)
  }
 functionNameRest ("facebook", 1,2,3,4)

 // *
// SPREAD
// *
//Takes an array and explodes(spreads) it into numberous elements in another array
let ar1 = [4, 5, 6]
let ar2 = [1, 2, 3, ...ar1]
console.log('Spread simply',ar2)

//When or why to use SPREAD AND REST 
//of manipulating arrays, kind of adding, inserting, appending to an array, copying arrays, and then
//also when you want to pass explode arguments to pass into a function which accepts a variable number
//of arguments.

//==========================================================================================================================
//*
//TEMPLATE STRINGS
//*

//*
//OBJECTS
//*
// Objects can be created anywhere, just like variables.
// const objectExample = {}
// console.log(objectExample)
//even when calling/invoking a function like below. 
//functionName ({firstName: 'John'})


//*
//FUNCTIONS (functions are objects)
//*
//First Class functions definition- Everything you can do with other types (eg. strings, numbers, booleans etc) you can do with functions,
//even assign them to variables, create them on the fly and pass them around.

//Functions are a special type of object and can therefore have primitives, objects, functions (and anonyomous functions) and code
// as properties. A function needs to be seen as an object with above mentioned as properties of that function. Even the code
// written in that function needs to be seen as a property of the function which is a object. 
//functions can be moved around, just as any other object. 
//So because functions are objects in JS the following is possible to do:

function greet() {
  console.log ('hi')
}
greet.language = 'english' //giving the greet function a property (key) of language with the value of english
console.log('functions are objects', greet.language) //outputs english

//THIS-keyword
//the VALUE of this depends on the invocation context of the function it is used it.

  function a() {
    console.log(this)
  }
  a()
console.log(this)
</script>

<style>

</style>