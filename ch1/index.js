//******************* */ HOW TO IMPORT MODULES USING REQURE JS ***************************
// const lib = require("./lib");
// console.log(lib.sum(5, 6));

//******************* */ FILE SYSTEM MODULE ***************************
// const fs = require("fs");

// const text = fs.readFile("./demo.txt", "utf-8", (err,text) => {
//   console.log(text);
// });

//******************* */ Example for understanding live server issue and using nodemon ***************************
// const express = require("express");

// console.log("hello");

// const server = express();
// server.listen(8000);

// ********************   npm update, outdate, (^, ~, *) *******************

// HOME WORK

// **************************** HOW TO USE COMMAND LINE ARGUMENT ***************************
// const arguments = process.argv;

// const sum = (a, b) => {
//   console.log(a, b);
//   return parseInt(a) + parseInt(b);
// };

// console.log(sum(arguments[2], arguments[3]));

// **************************** LETS EXPLORING OS MODULE ***************************
// const os = require("os");

// // const details = os.cpus();
// const details = os.hostname();

// console.log(details);

// **************************** RUNNING SYSTEM COMMAND IN JS FILE, AN STORE ITS OUTPUT ***************************

// const execSync = require("child_process").execSync;

// const output = execSync("dir", { encoding: "utf-8" });
// console.log("Output was:\n", output);
