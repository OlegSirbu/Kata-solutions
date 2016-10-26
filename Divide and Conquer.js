// Given a mixed array of number and string representations of integers,
// add up the string integers and subtract this from the total of the non-string integers.
// Return as a number.

function divCon(x) {
    let stringNumbers = [], intNumbers = [], sumInter = 0, sumString = 0;

    x.forEach(function (i) {
        if (typeof i === 'string') {
            stringNumbers.push(i);
        } else {
            intNumbers.push(i);
        }
    });

    if(!!intNumbers.length){
        sumInter = intNumbers.reduce((x, y)=> {
            return x + y;
        });
    }
    if(!!stringNumbers.length){
        sumString = stringNumbers.reduce((x, y)=> {
            return +x + +y;
        });
    }

    return sumInter - sumString;

}

divCon([9, 3, '7', '3']);//(9+3) - (7+3) = 2
divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7])//14)
