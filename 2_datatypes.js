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


//???????????MEMORY?????????///
//2 types heap and stack;
//In stack a copy is created whereas in heap refrence
//stack(all primitive data types)  heap(non-primitive)

let myname = "Harsh"
let mynewname = myname //copy is provided not the original one so below when we change the mynewname it only replaces the copy not the original
mynewname = "hehe" 
console.log(myname)
console.log(mynewname)

//           stack demonstration   
let userone = {
    email: "hehe@gmai.com",
    name: "hehe"
}
let usertwo = userone

usertwo.email = "harsh@gmail.com"

console.log(userone.email)
console.log(usertwo.email)
//here we get same value because same refrences is given not the copy so the value is changed
