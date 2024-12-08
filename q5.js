console.log(`${'*'.repeat(3)} Question 5 start ${'*'.repeat(3)}`)

/* Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

1st (1)   2nd (3)    3rd (6)
*          **        ***
           *         **
                     *
You need to return the nth triangular number. You should return 0 for out of range values:

For example: (Input --> Output)

0 --> 0
2 --> 3
3 --> 6
-10 --> 0 */

function triangular( n ) {
  let result = 0;
  
  while(n > 0){
    result += n--;
  }
  
  return result;
}

console.log(triangular(10))
console.log(triangular(20))
console.log(triangular(3))
console.log(triangular(18))




/* This problem required me to research triangular numbers. Once I understood the underlying math,
I chose to use a while loop, as it allowed me to iterate without needing an index, making the loop more efficient for this particular task.
*/


console.log(`${'*'.repeat(3)} Question 5 end ${'*'.repeat(3)}`)

