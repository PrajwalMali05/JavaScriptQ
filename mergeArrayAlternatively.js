function mergeArrayAlternate(arr1 ,arr2){
    const maxLength = Math.max(arr1.length, arr2.length);
    let newArray= [];
    for(let i =0; i<maxLength; i++){
        if(i<arr1.length) newArray.push(arr1[i]);
        if(i<arr2.length) newArray.push(arr2[i]);        
    }
    return newArray;
}
console.log(mergeArrayAlternate([1,2,3,4,5,6,7],['a','b','c','d']))