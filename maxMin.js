function minMax (arr){
    return {
       min: Math.min(...arr),
       max : Math.max(...arr)
    }
}

console.log(minMax([1,4,3,6,2]))