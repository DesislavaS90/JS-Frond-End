function palindromeIntegers(numsArr){

    function isPalindrome(num){
        let numAsString = num.toString();
        if (numAsString === numAsString.split("").reverse().join("")){
            return true;
        }
        return false
        
    }

    for (let i = 0; i < numsArr.length; i++){
        console.log(isPalindrome(numsArr[i]));
        }
    }

palindromeIntegers([32,2,232,1010])
    
