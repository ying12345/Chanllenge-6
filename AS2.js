/* Question 2: Write a javascript function that takes an array of numbers and a target number. 
The function should find two different numbers in the array that, when added together, give the target number.
For example: answer([1,2,3], 4)should return [1,3] */


function findSum(array, target){
	for (i=0; i<array.length ; i++){
		for (j=i+1; j<array.length; j++){
			if (array[i]+array[j]===target){
				result=[array[i],array[j]];
				console.log (result);
			}
		}
	}
}

findSum([1,2,3], 4);
findSum([3,5,4,6,2],8);


/*
function arraySum(arr, target) {
  arr.forEach(function(num, i) {
    for (let j = 1; j <= arr.length; j++) {
      // check each element and iterate over the rest to find out if their sum is the target
      // j is 1, we don't want to sum each element with themselves
      if (arr[i] + arr[i + j] === target) {
        // create a new array and put correct elements into that
        let arr2 = [arr[i], arr[i + j]];
        console.log(arr2);
        return arr2;
      }
    }
  });
}
*/