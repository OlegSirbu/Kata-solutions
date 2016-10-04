// Paul is an excellent coder and sits high on the CW leaderboard.
//  He solves kata like a banshee but would also like to lead a normal life, with other activities. 
// But he just can't stop solving all the kata!!
// Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:
// kata = 5 Petes kata = 10 life = 0 eating = 1
// The Misery Score is the total points gained from the array. Once you have the total, return as follows:
// <40 = 'Super happy!'
// <70 >=40 = 'Happy!'
// <100 >=70 = 'Sad!'
// >=100 = 'Miserable!'

function paul(x) {
    var data = [
        {
            name: 'kata',
            val: 5
        },
        {
            name: 'Petes kata',
            val: 10
        },
        {
            name: 'life',
            val: 0
        },
        {
            name: 'eating',
            val: 1
        }
    ];
    var totalCount = 0;
    for (var i = 0; x.length > i; i++) {
        for (var j = 0; data.length > j; j++) {
            if (x[i] === data[j].name) {
                totalCount += data[j].val;
            }
        }
    }
    console.log('FINISH totalCount =', totalCount);

    return  (totalCount < 40)
        ? "Super happy!"
        : (totalCount >= 40 && totalCount < 70)
        ? 'Happy!'
        : (totalCount >= 70 && totalCount < 100)
        ? 'Sad!'
        : "Miserable!";

}
var result = paul(['life', 'eating', 'life']);
console.log('RESULT', result);