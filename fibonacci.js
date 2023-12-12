function fibo(number){
    if(number<=0) return [];
    if(number === 1) return [0];

    let seq = [0,1];

    while(seq.length<number){
        let nextNumber = seq[seq.length-1] + seq[seq.length-2];
        seq.push(nextNumber)
    }
    return seq;
}
console.log(fibo(8));