// function reverseString(str, start, end){
//     if(start >= end) return str;
//     let newArray = str.split('');
//     let startValue =newArray[start];
//     newArray[start] = newArray[end];
//     newArray[end] = startValue;
    
//     return reverseString(newArray.join(''), start-1, end-1)
    
// }
// let str='prajwal'
// console.log(reverseString('prajwal', 0, str.length-1))

function reverse(str){
    let newString='';
    for(let i = str.length-1; i>=0; i--){
        newString = newString+ str[i]
    }
    return newString;
}

console.log(reverse('Prajwal'))