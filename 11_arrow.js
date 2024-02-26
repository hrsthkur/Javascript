const user = {
    username: "Harsh",
    price: 999,

    welcomeMessage: function(){
       // console.log(`${this.username} welcome to website`);   // "this" used to refer current values or variables
    }
}
user.username = "hehe"
user.welcomeMessage()

// function chai(){

//     console.log(this);   //this gives {} or empty obhject because yaha global object empty object hai aur chrome ya browser me window hai
// }
// chai()

const fxn = () => {    //arrow function
console.log(this);
}
//fxn()


//    (parameters) =>     arrow function

const addtwo = (num1,num2) =>  (num1 + num2)    //implicit return no need to write return if same line

//curly braces use hua agr to return use krna hoga
//explicit return then use return 

console.log(addtwo(2,4));
