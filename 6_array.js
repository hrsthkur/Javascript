//array is an object
//const myArr = [0, 1, 2, 3, 4, 5]
//array in javascript is recylable

// myArr.push(7)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);
//  myArr.unshift(90)
// //unshift inserts at the starfting
// myArr.shift()
// //removes the unshift value
// // console.log(myArr);
// // console.log((myArr.includes(90))); //true or fals
// // console.log((myArr.indexOf(90))); //-1 if not present else index
// const newArr = myArr.join() //comma seprated string bna dega
// // console.log(newArr);
// // console.log(typeof newArr);

// //***slice and splice  ****/
// const nA = myArr.slice(1,3)
// console.log(myArr);
// console.log(nA);
// // in slice the original array is not changed and last value is not inlcuded whereas in splice original array is chnaged to remaining part of splice and last value is also included
// const nAA = myArr.splice(1,3);
// console.log(nAA);
// console.log(myArr);
const Arr = [1,2,3,4,5]
const nArr = [2,4,7,2]
//Arr.push(nArr)
//console.log(Arr);
//here we get to know that array accepts any data type so the array accepts another array as a datatype 

// const all = Arr.concat(nArr)
// console.log(all);
//push uses the same array but cancat stores in new array
//   ... these three dots are spread 
const all = [...Arr,...nArr] //spread operator
//console.log(all); 

const anotherArr = [1,2,3,[5,6,1,[2,3,5],4],99]
const another = anotherArr.flat(Infinity) //infinity in place of depth you can put according to you
console.log(another);

console.log(Array.is);