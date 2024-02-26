let neww = 100;
if(true) {
let a = 10
const b = 20
var c = 30
let neww = 0
}
//console.log(a)  //out of scope error
// console.log(b)    //same error
// console.log(c)  //no error. It goes out of scope
// console.log(neww);


function one(){
    const username = "Harsh"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    //console.log(website);  //out of scope

    //child function parent ki chize use kr skta hai but parent child k nhi that's why there is an error in line 21

    two()
}

// one()

  if(true){
    const username = "Harsh"
    if(username==="Harsh"){
        const website = "youtube"
        console.log((username + website));
    }
  }



// ++++++++++++++++++++ interestin +++++++++++++++//

console.log(addone(5))      //ye error nhi dega jbki niche declare kra hai
function addone(value){
    return value + 1
}

console.log(addtwo(5));    //but ye error dedega because ek variable me hold kra hai niche
const addtwo = function(num){     //also type of function declaration called as expression
    return num + 2
}

