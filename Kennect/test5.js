
function primeNumber(inputNum) {

    let isPrime = null;

    if(inputNum <=1)
        return "Neither Prime Not Composite";

    else{
        for(let div=2;div<=Math.trunc(inputNum/2);div++){

               if(inputNum%div==0){

                isPrime = false;
                break;
               }

               else isPrime = true ;

            }

    }

    const primeNum = isPrime ? 'Number is Prime' :'Number is Not Prime';
     return primeNum ;


}


function nextPrimeDiff(origNumber){
    let inc =1;
    let nextPrimeNumber = null;

 for(inc;;inc++){

        nextPrimeNumber=origNumber+inc;
        if(primeNumber(nextPrimeNumber).toUpperCase().match('NUMBER IS PRIME')){

            return `Next Prime Number is ${nextPrimeNumber} and the Difference Between Two Primes is ${inc} `;
        }





 }




}

console.log(primeNumber(5));
console.log(nextPrimeDiff(5));
