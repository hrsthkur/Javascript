const score = 400
//another defining term
const anotherscore = new Number(100)
console.log(score) //output = 400
console.log(anotherscore) //output with given data type i.e Number 100

console.log(score.toString());
console.log(typeof(score.toString())); //convert it to string but remember stack memory
console.log(score.toFixed(4)); //for precision value or number of decimals
const newnumber = 12.34778292
console.log(newnumber.toPrecision(3)); //gives round off upto 3 or n digits including before decimal
const hundred = 100000000000;
console.log(hundred.toLocaleString()); //according to us standards can be changed to indian by adding 'en-IN' in ()
