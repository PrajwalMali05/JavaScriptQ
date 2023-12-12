function uniqueArray(arr){
    return Array.from(new Set(arr))
}
function removeDuplicates(arr) { 
    return arr.filter((item, index) => arr.indexOf(item) === index);  
  } 
 
console.log(uniqueArray([1,1,2,3,4,5,5,5,6,7,8]))