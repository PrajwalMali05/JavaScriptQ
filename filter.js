//filter all fasly values

function removeFalsy(arr){
  return  arr.filter(a=>a)
}
console.log(removeFalsy([null, 1,2,undefined,NaN, '']));