// Immediately Invoked Function Expression (IIFE) 

// iife when global variable se problem ya pollution ho rha ho then we use () aur iske andr function likhte hai
//so it doesn't get polluted

(function check(){
    console.log("going good");
}) ();   //semicolon is used to end the envoked function use when two iife is used // function is just called after declaration ie immediately
   
//named iife upr vala, niche vala un-named iife


((name) => {
    console.log(`check this ${name}`);
}) ("Harsh");   //value passing like any other function