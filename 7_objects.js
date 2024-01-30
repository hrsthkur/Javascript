const sym = Symbol("hehe")
const User = {
    name: "Harsh",
    age: 18,
    location: "lucknow",
    email: "hrsthkur1@gmail.com",
    isLoggedIn: false,
    [sym]: "mykey" //see line 18


}

// console.log(User.email);
// console.log(User["email"]);
//above are two methods of accessing
//console.log(User[email]);  //here it gives error because the key is stored in the form of string so we have to use""

//using symbol data type in object
// console.log(User[sym]);
//console.log(typeof (User[sym]));

User.email = "newemail.com" // overwriting or changing
// Object.freeze(User) // no changes will happen after this

// User.greeting = function(){
//     console.log("hello user");
// }
// console.log(User.greeting());
// User.twogreeting = function(){
//     console.log(`hello user ${User.name}`)
// }

// console.log(User.twogreeting());

const reguser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Harsh",
            lastname: "Singh"
        }
    }
}

console.log(reguser.fullname.userfullname.lastname);

const obj = {1: "a",2: "b",3: "c"}
const obj1 = {4: "d",5: "e",6: "f"}

//const obj2 = {obj, obj1} //it gives object and object like array and array it doesn't merge
const obj2 = Object.assign({}, obj, obj1) //using {} is not necessary it just acts as a target in which all values is copied else it will be copied to first given object
console.log(obj2);

//another method
const obj3 = {...obj, ...obj1} //spread operator