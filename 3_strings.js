const name = "Harsh"
const repocount = 4
// console.log(name + repocount + " value");
//another way ===>>> string interpolation
// console.log(`my name is ${name} and my repo count is ${repocount}`)
//insertion of var or const by using $ sign and curly braces rest are taken as string

// const gamename = new String('Harsh')
//another way of defining string
// console.log(gamename[0]);
// console.log(gamename[1]);
// console.log(gamename.length);
// console.log(gamename.toLocaleLowerCase());
// console.log(gamename.toUpperCase());
//console.log(gamename.__proto__); //returns as empty object {} or datatype
// original value is not changed because its in stack memory or copy is created
// console.log(gamename.charAt(2)) //gives the the value at the index #0 based indexing
// console.log(gamename.indexOf('s')); // returns index of 
const newname = "Harsshh"
// console.log(newname.indexOf('s')); // always returns the first occurence
//const anotherstring = newname.substring(0,4)
// console.log(anotherstring); //output is Hars not Harsh which means the last value or index is not included
const anothernewstring = newname.slice(-1,2) //substrings are genrated here we can give negative value which will give reverse
console.log(anothernewstring);

const newstring = "  haha spaces  "
console.log(newstring.trim()); // deleted the spaces

const url = "https://hehe%20dash.com"
console.log(url.replace('%20', '-'));





