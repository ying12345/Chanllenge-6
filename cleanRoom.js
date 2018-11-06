/*Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
make a function that organizes these into individual array that is ordered. For example 
answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] 
should return [[1,2], ["2", "3"]]


/*Algorithm
Sort an arr[] of size n:
bubbleSort(arr)
Loop i from 0 to (n -j), compare arr[i] to arr[i+1], move bigger element to the right.
*/

array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20,'c','a','1'];


//iterate the array array.length-1 times, everytime the biggest number goes to the last.
function bubbleSort(arr){
	len=arr.length;
	for (j=1; j<len;j++ ){
		for (i=0; i<len-j;i++){
			if (arr[i]>arr[i+1]){
				x=arr[i];
				arr[i]=arr[i+1];
				arr[i+1]=x;
			}
		}
	}
	return arr;
}


newArray = [];
subArray = [];
function shelfArray(arr){
	for(i=1;i<arr.length;i++){
		if (a[i]===a[i-1]) {
			subArray.length===0 ?
			subArray.push(a[i-1],a[i])
			:
			subArray.push(a[i]);
		}
		if (a[i]!=a[i-1]) {

		 if (subArray.length>0) {newArray.push(subArray);}
		 if (a[i]!=a[i+1] ){newArray.push(a[i]);}
		subArray=[];
		}		
	}
	return newArray;
}

/*Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] 
should return [[1,2], ["2", "3"]] */

function sortTheType(arr) {
	num=[];
	str=[];
	for (i=0;i<arr.length;i++){
		c=typeof(arr[i]);
		switch(c){
			case "number":
			num.push(arr[i]);
			break;
			case "string":
			str.push(arr[i]);
			break;
		}
	}
	return [bubbleSort(num),bubbleSort(str)];
}


console.log(bubbleSort(array));
console.log(sortTheType(array));
	