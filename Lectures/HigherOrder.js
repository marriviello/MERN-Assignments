//Higher Order FUnctions work on Arrays Exclusively

// for (let i=0; i<arr1.length;i++){
//     console.log(`Index:${i} Value: ${arr1[i]}`)
// }

// arr1.forEach((element,index)=>{
//     console.log(`Index: ${index} Value: ${element}`)
// })

let arr1 = [2,5,16,14,23]

// for(let i=0;i<arr1.length;i++){
//     arr1[i] *= 2
// }

//.map is making a copy, not altering array
// const arr = arr1.map(element => element*2)

//find odd numbers
    // let oddArr=[]
    // for(let i=0;i<arr1.length;i++){
    //     if(arr1[i] % 2 !== 0){
    //         oddArr.push(arr1[i])
    //     }
    // }

// const newArr = arr1.filter((num)=>(
//     num % 2 == 0
// ))

// console.log(newArr)

// let sum=0
// for(let i=0; i<arr1.length; i++){
//     sum += arr1[i]
// }

//first argument is an accumulator
const sum = arr1.reduce((acc,num)=>(
    acc + num
))

console.log(sum)

// console.log("Arr1:",arr1)
// // console.log("Arr:", arr)
// console.log("Odds",oddArr)