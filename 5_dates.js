//Dates

let myDate = new Date()
// console.log(myDate.toString()); //returns day & date and time and zone
// console.log(myDate.toDateString()); //returns date only(day included)
// console.log(myDate.toISOString()); //alg type ka format yyyy-mm-dd
// console.log(myDate.toJSON()); //same as above
// console.log(myDate.toLocaleDateString()); //normal date without day

let myCreatedDate = new Date(2024,01,11)
// console.log(myCreatedDate.toLocaleString());
//MONTH STARTS FROM 0 NOT 1👀👀 auto inserts time if you use format that outputs time

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); //converted ms to s as time here is in ms

let newDate = new Date()
console.log(newDate.getDay()); //like this there are muultiple functions like getdate gettime,etc

newDate.toLocaleString('default', {
    weekday "long"
}) //ctrl + space gives all the properties