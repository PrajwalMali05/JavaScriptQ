function arraySum(arr){
    return arr.reduce((aggration, currentValue)=>{
        return aggration+currentValue;
    },0)
}
console.log(arraySum([1,2,3,1]));