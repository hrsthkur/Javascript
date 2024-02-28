// var doesn't have any specific scope 
// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`User Power ${power}`);
// }
const month = 3;
switch (month){
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;
        //if koi bhi condition match ho gyi then vo uske bad k sare code execute krega without checking the other condition except default
    default:
        console.log("beyond March")
        break;

}

//*******************TRUTHY VALUES   ******************/

const useremail = "hrs"
 if(useremail){
    console.log("Got");
 }
 else {
    console.log("Not got");
 }

 //Falsy values ===> false, 0, -0, BigInt 0n, ""(empty string), null, undefined, NaN
 //others are truthy value
 //"0", "false" or 'false' all are truthy, " ", [], {} ->truthy


 // NUllish Caolescing operator (??): null undefined

 // take value accordingly null, undefined

 //terniary operator  (?) 
 const ice = 100
  ice >= 80 ? console.log("greater than 80") : console.log("less than 80");