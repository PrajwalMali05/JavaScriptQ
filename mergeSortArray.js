function sortArray(arr1, arr2){
    return [...arr1,...arr2].sort((a,b)=>a-b)
}

console.log(sortArray([1,21,30,42,5],[10,45,23,67]))