console.log(`${'*'.repeat(3)} Question 2 start ${'*'.repeat(3)}`)

/* Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between. */

let number = function(array){
  let line= 1;
  return array.map(element => `${line++}: ${element}`)
}

console.log(number(["a", "b", "c"]))

/*
By utilizing the .map() method, I created a function that incremented the line variable 
and used string interpolation to integrate it into each element of the array. Initially the problem seemed have multiple 
steps but after reviewing the problem again I was able to realize that it was a two step problem.
*/

console.log(`${'*'.repeat(3)} Question 2 end ${'*'.repeat(3)}`)
