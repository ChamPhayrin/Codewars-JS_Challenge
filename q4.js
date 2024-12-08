console.log(`${'*'.repeat(3)} Question 4 start ${'*'.repeat(3)}`)

/* Write a program to determine if the two given numbers are coprime. A pair of numbers are coprime if their greatest shared factor is 1.

The inputs will always be two positive integers between 2 and 99. */


function isCoprime(x, y) {
  let smallerNum = Math.min(x, y);

  for(let i = 2; i <= smallerNum; i++){
    if(x % i === 0 && y % i === 0){
      return false
    }
  }
  
  return true;
  
}

console.log(isCoprime(2, 4))
console.log(isCoprime(4, 9))
console.log(isCoprime(-10, 1))
console.log(isCoprime(200, 10))


/* 
This problem took me a while to fully understand and solve correctly. While I am comfortable with the syntax of a for loop, 
this challenge tested my logical thinking, particularly in figuring out how to structure the loop to solve the problem effectively.
*/

console.log(`${'*'.repeat(3)} Question 4 end ${'*'.repeat(3)}`)

