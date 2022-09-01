// variables hold data
//strings, numbers, boolean
// data types

var myString = 'string'
var myInteger = 4
var myBoolean = true

// data structures 
// arrays, objects (lists and dictionaries are in Python)

var myArr = [10, "string", false]

console.log(myArr[0])

// .push() //adds value
// .pop()
// .shift()
// .unshift()

myArr.push(84)
console.log(myArr)

//objects
var myObj={ 
    firstName: 'Maria', //keys
    lastName: 'Arriviello',
    email: 'maria@gmail.com'
}

console.log(myObj.firstName)
console.log(myObj['firstName'])

//ES5 Syntax
// var

//ES6
// let is flexible
// const is immutable

const myObj2= {
    firstName: "Cool",
    lastName:"Dude"
}

//can't change data structure inside of object but can change keys
myObj2.firstName= "Not Cool"
console.log(myObj2.firstName)

// //function definition
// function myFunct(param1,param2) {
//     //your code here
// }

// myFunct(1,5)

//ES6 Arrow Functions

//implicit return for one line of function code
const myArrowFunction = (param1, param2) => param1 * param2

const myArrowFunction2 = (param1, param2) => {
    console.log(param1,param2)
    return param1 * param2
}

console.log(myArrowFunction(2,5))
console.log(myArrowFunction2(2,5))

//destructure values out of an object
//pull keys out and give them their own variables
var myObj={ 
    firstName: 'Maria', //keys
    lastName: 'Arriviello',
    email: 'maria@gmail.com'
}

const {firstName,email} = myObj
console.log(firstName)
console.log(email)

//array destructuring 
var myArr = [10, "string", false]

const [var1, var2, var3] = myArr
console.log(var1,var2,var3)

//spread/rest operator

const copy = {...myObj}
console.log(copy)



const [var1, var2,var3] = myArr
console.log(var1,var2.var3)