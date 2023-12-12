
function diff(arr){
    return Math.max(...arr) - Math.min(...arr);
}
function usingSort(arr){
    let newArray = [...arr];
    return newArray.sort((a,b)=>b-a)[0] - newArray.sort((a,b)=>b-a)[newArray.length-1];
}
console.log(usingSort([1,2,3,4,5,6]))