// Assignment NO: 01
function calculateDifference(num1,num2){
    return num1-num2;
}

let result1=calculateDifference(234,230);
console.log(result1);


// Assignment NO: 02
function isOdd(num){
    if(num%2===0){
        return true;
    }
    else{
        return false;
    }
}

let result2=isOdd(20)
console.log(result2);

// Assignment NO: 03

function findMin(array){
    return Math.min(...array);
 }
 let array=[1,3,5,0,-1,23,6];
 let result3=findMin(array);
 console.log(result3);

 // Assignment NO: 04
 function filterEvenNumbers(array1){
    return array1.filter((item)=>{
           return item%2===0;
        })
}

let array1=[1,23,54,24,3,7,9,15,3,4,6,10];
let evenNumber=filterEvenNumbers(array1);
console.log(evenNumber);

 // Assignment NO: 05
 function sortArrayDescending(numbers){

    return ascendingNumbers=numbers.sort((a,b)=>a-b).reverse();
}
let numbers=[1,23,20,24,26,3,5,7,20,34];
let result=sortArrayDescending(numbers);
console.log(result);

 // Assignment NO: 06
function lowercaseFirstLetter(str){
    if(!str){
        return "please enter valid word"
    }else{
        return str.charAt(0).toLowerCase()+str.slice(1);
    }   
}

let str="Hello Word";
console.log(lowercaseFirstLetter(str));

 // Assignment NO: 07
 function countVowels(str1) {
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str1[i])) {
            count++;
        }
    }

    return count;
}

let str1 = "hello world";
let vowelCount = countVowels(str1);
console.log(vowelCount);

 // Assignment NO: 08

 function findAverage(numbers1){
    if(numbers1.length===0){
        return 0;
    }
    
    let sum= numbers1.reduce((accumulator,num)=>accumulator+num,0)
    return sum/numbers1.length;

    
}
let numbers1=[1,23,18,45,26,27,28]
let averageNumber=findAverage(numbers1);
console.log(averageNumber);



