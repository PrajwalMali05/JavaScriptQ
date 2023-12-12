const { reduce } = require("lodash");

//anagram
function anagram(str1,str2){
    if(str1.lenght != str2.lenght) return false;
     return str1.split('').sort().join('') === str2.split('').sort().join('');
    }
    //console.log(anagram('mary1', 'army2'))

//fibonacci
// function fibo(number){
//     if(number <= 0) return [];
//     if(number === 1) return [0];
//     let seq = [0,1] ;
//     for(let i =2 ; i<=number; i++){
//         let sumNumber = seq[seq.length-1] + seq[seq.length-2];
//         seq.push(sumNumber);
//     }  
//     return seq; 
// }
// console.log(fibo(2))

//rever String
// function reversString(str){
//     if(str.lenght === 1) return str;
//     let newString ='';
//     for(let i = str.length - 1; i >= 0 ; i--){
//         newString = newString+str[i];
//     }
//     return newString
// } 
// console.log(reversString('abcd'))

//unique values from array
// function uniqueValue (arr){
//     return Array.from(new Set(arr));
// }
// console.log(uniqueValue([1,1,2,2,3,4,45,6,6,7,7]))

//debouncing func delay
// document.getElementById('btn').addEventListener('click',debounc(()=>{
//     console.log('Hello from the other side')
// }, 2000))
// function debounc(func, delay){
//     let timer;
//     return function(){
//       clearTimeout(timer);
//       console.log(timer);
//         timer = setTimeout(func,delay);       
//     }
// }

//factorial
// function factorial (number){
//     if(number === 0 || number === 1) return 1;
//     return number * factorial(number -1);
// }
// console.log(factorial(4))

//isPrime or not
// function isPrime(number){
//     if(number<=1) return false;
//     for(let i = 2; i< Math.sqrt(number); i++){
//         if(number%i ===0) return true;
//     }
//     return false;
// }
// console.log(isPrime(5))

//sum of all array element
// const sumArray=(arr)=>arr.reduce((ag,cv)=>ag+cv,0);
// console.log(sumArray([1,2,3]))