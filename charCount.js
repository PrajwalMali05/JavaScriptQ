function charCount(str){
    const charCounter ={}
    for(let s of str){
        charCounter[s] = (charCounter[s] || 0)+1;
    }
    return charCounter
}
console.log(charCount('Prajwal'))