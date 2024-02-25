function sayMyName(){
    console.log("H");
    console.log("a");
    console.log("r");
    console.log("s");
    console.log("h");
}
function add(number1,number2){ //data type not required //parameters a AND b
//console.log(number1+number2);
}
// add(2,3) //arguments 2 AND 3
// add(2,"3") //it treats both as string
// add(2+"a")
const result = add(3,6);
//console.log("result: ", result); //undefined if we dont make use of return in function

function loginusermessage(username){
    if(username===undefined||!username) {
       // console.log("please enter a user name");
        return "value DAAL BHAI"
    }
    else{
    return `${username} just logged in`
    }
}
//console.log(loginusermessage("Harsh"));
//console.log(loginusermessage()); //undefine just logged in or use if else like above


function calculateCartPrice(...num1){
    return num1   //converts it into array by using spread operator above
}
//console.log(calculateCartPrice(200, 300, 4000, 500));

const user = { 
    username: "HARSH",
    price: 1999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and its price is ${anyobject.price}`);
}
handleObject(user)