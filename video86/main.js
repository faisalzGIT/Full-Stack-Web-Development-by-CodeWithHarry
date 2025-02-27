// const http = require('node:http');
// import http from 'http';


// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World</h1>\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


//ECMAScript Modules Import
import {e} from "./forESM.js";
console.log(e);


// import defaultObj from "./forESM.js"
// console.log(defaultObj);

// CommonJS Module import
// let k = require("./forCJS.js")
// console.log(k);
