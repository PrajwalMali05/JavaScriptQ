function sortOnKey(arr, key){
    return arr.sort((a,b)=>a[key]-b[key])
}
arr=[
    {
        a:'prajwal',
        b:1,
        c:5
    }, 
    {
        a:'prajwal5',
        b:2,
        c:2
    },
    {
        a:'prajwal3',
        b:3,
        c:1
    },
    {
        a:'prajwal8',
        b:4,
        c:8
    }
]
console.log(sortOnKey(arr,'c'))