//All the loops are same as cpp

//*************for of loop********** */

const arr = [1,2,3,4,10]
// for (const iterator of arr) {
//     console.log(iterator);
// }

//for of loop is like auto iterator in c++

const myobj = {
    game1: 'nfs',
    game2: 'spiderman'
}

// for (const iterator of myobj) {
//     console.log(iterator);
// } //            ==>> forof -->> object not iterable

//forin loop

// for (const key in myobj) {
//    console.log(myobj[key]);
// }
//map is not iteratable so not in forin loop
//objects can be iterated through for in loop

// for (const key in arr) {
//     console.log(arr[key]);
//  }


 //***********     foreach loop     ************/
 const coding = ["cpp", "ruby", "js", "ts", "python"]
//  coding.forEach( function (item) {
//     console.log(item);
//  } )
 
//  coding.forEach( (val)=> {
//     console.log(val);
//  })


//  coding.forEach( (item, index, arr)=> {   //item index and array can be accessed
// console.log(item, index, arr);
//  })

const names = [
    {
        first: "harsh",
        last: "singh"
    },
    {
        first: "h",
        last: "s"
    }
]

names.forEach((i)=>{
console.log(i.first);
})