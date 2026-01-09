const fibonacci = function(n) {
    if(n < 0){
        return "OOPS";
    }
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }
    if(n == 2){
        return 1;
    }
    let t1 = 1, t2 = 1;
    let i = 2;
    while(i < n){
        let temp = t2;
        t2 = t2 + t1;
        t1 = temp;
        i++;
    }
    return t2;
};

// Do not edit below this line
module.exports = fibonacci;
