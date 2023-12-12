function groupEvenOdd(arr){
    let even = [...arr].filter(a=> a%2===0)
    let odd = [...arr].filter(a=> a%2!=0)
    return {even, odd}
}
console.log(groupEvenOdd([1,2,3,4,5,6,7,8]))