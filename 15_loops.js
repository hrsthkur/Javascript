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

// names.forEach((i)=>{
// console.log(i.first);
// })

// const values = coding.forEach( (item) => {
//     console.log(item);
// } )

// console.log(values);  //gives undefined

// const mynums = [1, 2, 3, 4, 5, 6, 7]

// let newnums = mynums.filter((num) => num>4)   //filter returns the values after checking the condition
// let newnumss = mynums.filter((num) =>{         //explicit implicit if using {} then use return
//    return num>4
// } )  

// console.log(newnums);

// const newn = mynums.map( (num) => num + 10)
// console.log(newn);
//by for each ->
// const newn = mynums.forEach(element => {
//     element = element + 10
//     console.log(element)
// });


// const newNums = mynums
//                      .map( (num) => num * 10)
//                      .map( (num) => num + 10)              //chaining --> one is executed then it is passed to next operation (values changed)
//                      .filter((num) => num>=40)
// console.log(newNums);


//******************   reduce  ******************/

// const mynums = [1, 2, 3, 4, 5, 6, 7]


// const total = mynums.reduce((acc,curr) => {
//     return acc + curr
// },0)   //0 ya jo bhi use krenge usse shuru me assign hoo jayega
// console.log(total);


const cart = [
    {
        item: "js",
        price: 3000
    },
    {
        item: "py",
        price: 2000
    },
    {
        item: "cpp",
        price: 3500
    },
    {
        item: "ruby",
        price: 3000
    },

]

const topay = cart.reduce( (acc,value) =>acc + value.price ,0)
console.log(topay);



