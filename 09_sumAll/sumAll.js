const sumAll = function(a, b) {
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        return 'ERROR';
    }
    if(a < 0 || b < 0){
        return 'ERROR';
    }
    let mx = Math.max(a, b);
    let mn = Math.min(a, b);
    let sum = 0;
    for(let i = mn; i <= mx; i++){
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
