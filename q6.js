console.log(`${'*'.repeat(3)} Question 6 start ${'*'.repeat(3)}`)

/* There's a waiting room with N chairs set in single row. Chairs are consecutively numbered from 1 to N. First is closest to the entrance (which is exit as well).

For some reason people choose a chair in the following way

Find a place as far from other people as possible
Find a place as close to exit as possible
All chairs must be occupied before the first person will be served

So it looks like this for 10 chairs and 10 patients

Chairs	1	2	3	4	5	6	7	8	9	10
Patients	1	7	5	8	3	9	4	6	10	2
Your task is to find last patient's chair's number.

Input: number of chairs N, an integer greater than 2.
Output: a positive integer, the last patient's chair number. */


function lastChair(N){
  return N - 1;
}

console.log(lastChair(10))
console.log(lastChair(9))
console.log(lastChair(30))

/* Initially, I created a function that would iterate through the given number N, 
pushing values into an array and returning the last element as the answer. However, 
I got stuck on how to complete the multi-step process. While looking back at the problem, 
I began to recognize a pattern: the last seat occupied is always one position before the last seat. 
Once I realized this, I was able to simplify the function by subtracting one from N to determine the last seat that was sat in.
*/



console.log(`${'*'.repeat(3)} Question 6 end ${'*'.repeat(3)}`)
