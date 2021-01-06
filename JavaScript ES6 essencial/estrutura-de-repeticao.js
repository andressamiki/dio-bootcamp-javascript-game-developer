const array = ['one', 'two', 'three'];

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(`Element #${index}: ${element}.`);
}

var n = 0;
var x = 0;

while(n<3){
    n++;
    x+= n;
}

console.log(x);

let i = 0;
do {
    i += 1;
    console.log(i);
} while (i<5);

let arr  = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
   console.log(i)
}

for (let i of arr) {
    console.log(i)
 }


