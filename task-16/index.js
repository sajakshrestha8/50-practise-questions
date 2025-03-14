//Create a function that wil return boolean specifying if a number is prime or not
//2, 3, 5, 7, 11, 13 => true
//1, 4, 6, 8, 8, 10, 12 => false

let num = 7;
let count = 0;

const checkPrime = function () {
	for(let i = 0; i<10; i++){
        if(num % i === 0){
            count ++;
        }

    }
    if(count <= 2){
        console.log(true);
    }else{
        console.log(false)
    }
};

checkPrime(num);