//data types are of two types on the basis of how they are stored and accessed;
//1--PRIMITIVE= 7 types-->call by value
//string,number,boolean,null,undefined,symbol,BigInt

//javascript is dynamically typed because data type is assigned at runtime as of vaalue ex
let num = 100;
const IsLoggedin = false;
const Temp = null;
const id = Symbol('123')
const anotherid = Symbol('123')

// console.log(id==anotherid);
//diff between == & === is that === also compares the data type along with value
// console.log(id===anotherid);

//2--Refrence type or NON-Primitive
//Array,objects,function

//array of string
let names = ["harsh", "kavya", "hehe"];

let myobj={
    name: "harsh",
    age: 20

}
const myfunction = function(){
    console.log("hello world")
}
console.log(typeof(null));
console.log(typeof(names));

//non primitive datatypes are objects datatype and bigInt datatype is undefined
