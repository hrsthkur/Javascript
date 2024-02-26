// Immediately Invoked Function Expression (IIFE) 

// iife when global variable se problem ya pollution ho rha ho then we use () aur iske andr function likhte hai
//so it doesn't get polluted

(function check(){
    console.log("going good");
}) ();   //semicolon is used to end the envoked function

(() => {
    console.log("check this");
}) ();