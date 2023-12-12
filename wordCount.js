//1. Find the frequency of elements in array

// function frequency(arr){
//     let count ={};
//     for(let a of arr){
//         count[a] = (count[a] || 0)+1;
//     }
//     return count
// }

// console.log(frequency(['achha','thike', 'hmm','achha','thike','hi']))

//Group on agg basis

let people =[
    {
        name:'Prajwal',
        age:'27'
    },
    {
        name:'Prajwal1',
        age:'30'
    },
    {
        name:'Prajwal3',
        age:'27'
    },
    {
        name:'Prajwal4',
        age:'30'
    }
]

// function groupBy(obj,key){
//     let group = {};
//     for(let pep of obj){
//        let c= (group[pep.age] || [])
//        c.push(pep)
//         group[pep.age] =c
//     //    console.log(pep)
//     //    console.log(c.push(pep))
//     //    console.log(c)
//     }
//     return group;
// }
// console.log(groupBy(people,'age'))

// function getCount(arr){
//     let a = {};
//     for (let o of arr){
//         a[o] = (a[o] || 0)+1;
//     }
//     return a;
// }
// console.log(getCount(['achha','thike', 'hmm','achha','thike','hi']));

function getCountObject(people){
    let newObject = {};
    for(let p of people){
        let c = (newObject[p.age] || []);
        c.push(p);
        newObject[p.age] = c;
    }
    return newObject;
}
console.log(getCountObject(people))
