function sumTarget(arr1,target){
    let a= [];
    let arr = Array.from(new Set(arr1))
    for(let i=0; i<arr.length; i++){
        for(let j =i+1;j< arr.length; j++){
            if(arr[i]+arr[j] === target){
                a.push([arr[i],arr[j]])
            }
        }
    }
    return a;
}
console.log(sumTarget([1,2,3,3,4,5,6,7],10).sort())