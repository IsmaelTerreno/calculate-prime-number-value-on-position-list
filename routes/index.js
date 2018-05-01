const express = require('express');
const router = express.Router();

/**
 * Check if a number is a prime number.
 * Complexity of algorithm O(sqrt(n)).
 * this will run the loop until square root of number.
 * @param number Integer value
 * @returns {boolean} If it's prime or not.
 */
const isPrimeNumber = number => {
    // Loop until square root of number.
    for(let i = 2, s = Math.sqrt(number); i <= s; i++){
        // Here if the module is zero is prime.
        if(number % i === 0){
            return false;
        }
    }
    // As last check.
    return number !== 1;
};

/**
 * Calculate the prime number list with a passed max number and obtain the prime number
 * from a particular calculated position.
 * Complexity of algorithm O(n).
 * @param maxNumber The max number to use whe calculate the prime numbers.
 * @param primePositionToGet The prime calculated position to obtain.
 * @returns number The prime number from position or 0 if not integer value.
 */
const obtainNPrimeNumberOfBaseNumber = (maxNumber, primePositionToGet) =>{
    let result = 0;
    // Check if we have a integer to process.
    if (maxNumber === parseInt(maxNumber, 10)){
        // Calculate the last prime from the passed max number.
        for(
            let i = 1, k = 0;
            i <= maxNumber;
            i++
        ){
            if(isPrimeNumber(i)){
                // Increment actual prime position calculated.
                k++;
                // Check if we have the prime number from the wanted position.
                if(k === primePositionToGet){
                    // Just save the prime number.
                    result = i;
                    break;
                }
            }
        }
    }
    return result;
};
const pageHomeTitle = 'Calculate prime number value on position';
/* GET home page. */
router.get('/', function(req, res, next) {
     const result = '';
    res.render('index', {
        pageHomeTitle ,
        result,
    });
});

/* POST prime number to process page. */
router.post('/', function(req, res, next) {
    const maxBaseNumber = (req.body.baseNumber) ?
        parseInt(req.body.baseNumber,10) : 0;
    const primeNumberListPosition = (req.body.positionPrimeNumber) ?
        parseInt(req.body.positionPrimeNumber,10) : 0;
    const primeNumberObtained = obtainNPrimeNumberOfBaseNumber(maxBaseNumber,primeNumberListPosition);
    const result = (primeNumberObtained) ?
        'Result prime number = '+ primeNumberObtained +
        ' at '+ primeNumberListPosition +'th position from calculated list.':
        '';
    res.render('index', {
        pageHomeTitle ,
        result,
    });
});

module.exports = router;
