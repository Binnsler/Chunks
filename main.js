// Write a function that splits an array into a given number of equal-sized chunks.
// The function should take two arguments: the input array and an integer equal to the number of chunks to split it into. The return value should be an array of arrays (these are the 'chunks').
// var input = [1,2,3,4,5,6,7,8,9,10];
// chunk(input, 2); // should return [ [1,2,3,4,5], [6,7,8,9,10] ]

var input = [1,2,3,4,5,6,7,8,9,10];
var newArray = [];

var chunk = function(input, chunks){

	var avg = input.length/chunks;

	// If the array is perfectly divisible into chunks, the equation is simple.
	if(input.length % chunks === 0){

		for(var i = 0; i < chunks; i++){

			var temp = [];

			for(var j =0; j < avg; j++){

				temp.push(input.shift())

			}
			newArray.push(temp);
		}
	}

	// But if the array does not divide perfectly, we round up the average, 
	// shift off the first few, then use recursion. Note that we must subtract 1
	// from the the recursive call, since we already have created one of the arrays.
	else{

		var otherTemp = [];

		for(var i =0; i < Math.ceil(avg); i++){

			otherTemp.push(input.shift());

		}

		newArray.push(otherTemp);
		chunk(input, chunks-1)
	}

	return newArray
}

console.log(chunk(input, 3));