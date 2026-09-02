// const fs = require('fs');


// function print(err, data) {
//     if (err) {
//         console.log("file not found");
//     }
//     else {
//         console.log(data);
//     }
//     console.timeEnd("readFile");
// }
// console.time("readFile");
// fs.readFile("file.txt", "utf-8", print);

// console.time("console");
// console.log("done");
// console.timeEnd("console");




function timeout() {
    console.log("timeout done");
}

console.log("hello world");

setTimeout(timeout, 0.000000001);//I/O  intensive operation 

console.log("welcome to loop");
let c = 0;
for (let i = 0; i < 10; i++) { // CPU intensive operation 
                                        //js thread keep on running until the loop is completed
    c = c + 1;
}
console.log(c + " expenside operation is done");