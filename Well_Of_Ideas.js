// For every good kata idea there seem to be quite a few bad ones!
//In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'.
// I there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'.
// If there are no good ideas, as is often the case, return 'Fail!'.

function well(x){
    var len = x.filter((val)=>{return val === 'good'}).length;
    if(len > 2){
        return 'I smell a series!';
    }else if(len > 0){
        return'Publish!'
    }else{
        return'Fail!';
    }
}

well(['bad', 'bad', 'bad'])//'Fail!'
well(['good', 'bad', 'bad', 'bad', 'bad'])// 'Publish!');
well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])// 'I smell a series!'