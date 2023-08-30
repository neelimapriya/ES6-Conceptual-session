// arraySpreading.js

const arr = [3, 4, 5, 6, 7];
// const arr2=arr; //[3, 4,5,6, 7, 10, 20, 30 ]

const arr2=[...arr] //[ 3,  4,  5, 6,  7, 10, 20 ]

arr2.push(10)
arr2.push(20)

arr.push(30)

console.log(arr)
console.log(arr2)
