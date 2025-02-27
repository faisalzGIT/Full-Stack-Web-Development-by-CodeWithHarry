//Video 91 - Exercise 15
//Programmed to clear a cluttered folder and make the files organized in folders according to their type

import fs, { rename } from 'fs';
import path from 'path';

const baseDir = 'C:\\Users\\91956\\OneDrive\\Desktop\\New Folder (51)\\WEB-DEV-by-CWH-All-Data\\video91\\UnOrganizedFiles';
const finalDir = './OrganizedFiles';

const files = await fs.promises.readdir(baseDir);
// console.log(files);

for (const file of files) {
  const ext = path.extname(file).substring(1);
  // console.log(ext);
  
  const dir = path.join(finalDir, ext);
  // console.log(dir);

  if(!fs.existsSync(dir)){
    fs.mkdirSync(dir, {recursive:true});
  }

  const oldPath = path.join(baseDir, file);
  const newPath = path.join(finalDir, ext, file);

  await fs.promises.rename(oldPath,newPath);
}