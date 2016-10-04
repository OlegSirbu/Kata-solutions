//https://www.codewars.com/kata/generate-range-of-integers

//Description:
//Implement a function named generateRange(min, max, step),
//  which takes three arguments and generates a range of integers from min to max, with the step.
//The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)
//generateRange(2, 10, 2) should return array of [2,4,6,8,10] generateRange(1, 10, 3) should return array of [1,4,7,10]

// solutions
function generateRange(min, max, step){
    var count = parseInt((max - min)/step);
    var data = [min];
    for(var i = 0; count>i;i++){
        data.push(data[data.length-1]+step);
    }
    return data;
}
// generateRange(2,10,2); //[2,4,6,8,10]
generateRange(1, 10, 4); //[1, 5, 9]
