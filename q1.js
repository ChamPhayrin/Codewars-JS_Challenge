console.log(`${'*'.repeat(3)} Question 1 start ${'*'.repeat(3)}`)

/* To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument.

This function must return another function, which takes a single integer as an argument and returns a new array.

The returned array should consist of each of the elements from the first array multiplied by the integer. */


function multiplyAll(arr) {
  let multipliedArray = (multiply) => arr.map(number => number * multiply)
  
  return multipliedArray;
}

console.log(multiplyAll ([1,2,3]) (2))
console.log(multiplyAll ([1,2,3]) (1))
console.log(multiplyAll ([1,2,3]) (0))


/* 
The challenge was initially difficult to grasp, but by breaking it down into manageable steps, 

I realized that I needed to create a function and assign it to a variable. 

I was able to use the .map() method because I understood that each element in the array

would need to be multiplied by a value passed as an argument to the function. 
*/


console.log(`${'*'.repeat(3)} Question 1 end ${'*'.repeat(3)}`)