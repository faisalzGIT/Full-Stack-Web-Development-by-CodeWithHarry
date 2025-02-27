// import { appendFile } from 'fs';
import fs from 'fs/promises' //1

let a = await fs.readFile("harys.txt")  //2

let b = await fs.appendFile("harys2.txt", "\n\n\nHArry is a good buoy")  //3
let bb = await fs.readFile("harys2.txt")

console.log(a.toString(),bb.toString());
