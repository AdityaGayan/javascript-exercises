const palindromes = function (str) {
    str = str.toLowerCase();
    let i = 0, j = str.length - 1;
    while(i <= j){
        if((str[i] < 'a' || str[i] > 'z') && (str[i] < '0' || str[i] > '9')){
            i++;
        }
        else if((str[j] < 'a' || str[j] > 'z') && (str[j] < '0' || str[j] > '9')){
            j--;
        }
        else{
            if(str[i] != str[j]){
                return false;
            }
            i++;
            j--;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
