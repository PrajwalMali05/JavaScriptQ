function deppClone(obj){
    console.log(JSON.stringify(obj))
    return JSON.parse(JSON.stringify(obj))
}
const obj = {
    a:'prajwal',
    b:{
        a1:'Mali',
        b1:{
            a3:'kishor',
            c3:'Done'
        }
    }
}
const obj2 = deppClone(obj)
obj2.b.a1='Prajwal Mali';
console.log(obj, 'obj')
console.log(obj2)