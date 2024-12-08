console.log(`${'*'.repeat(3)} Question 3 start ${'*'.repeat(3)}`)

/* Write a program to determine if the two given numbers are coprime. A pair of numbers are coprime if their greatest shared factor is 1.

The inputs will always be two positive integers between 2 and 99.*/

function isCoprime(x, y) {
  
  let sharedFactor = [];

  let smallerNum = Math.min(x, y);

  for(let i = 1; i < smallerNum; i++){
    if(x % i === 0 && y % i == 0){
      sharedFactor.push(i)
    }
  }

  if(sharedFactor.length === 1){
    return true
  }
  return false
  
}

console.log(isCoprime(20, 27))
console.log(isCoprime(12, 39))
console.log(isCoprime(14, 44))




/* 
I broke the problem down into smaller steps. Knowing that I needed to check for shared factors and count how many there were, 
I created an empty array to store the common factors. I started by determining the smaller of the two numbers, x and y, 
and used it to iterate in a for loop. Inside the loop, I used the modulo operator to check if both x and y shared a factor. 
If they did, the shared factor was pushed into the sharedFactors array. Finally, I checked the length of the sharedFactors array. 
If it contained only one factor, I returned true, as this would mean that x and y are coprime numbers. This problem challenged my use of for loops
and making sure that I'm returning what the problem stated.
*/

console.log(`${'*'.repeat(3)} Question 3 end ${'*'.repeat(3)}`)
