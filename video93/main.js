//Video 93 - Exercise 15 Solution given by CWH
//Programmed to clear a cluttered folder and make the files organized in folders according to their type

import fs from "fs";
import path from "path";
// console.log(fs);

const oldPath = "C:\\Users\\91956\\OneDrive\\Desktop\\New Folder (51)\\WEB-DEV-by-CWH-All-Data\\video93\\unOrganizedFiles";

let files = await fs.promises.readdir(oldPath);
// console.log(files);

const baseDir = "./organizedFiles";

for (const file of files) {
  const ext = path.extname(file).substring(1);
  // console.log(ext)

  const dir = path.join(baseDir, ext);
  // console.log(dir)

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // console.log(path.join(oldPath, file));
  // console.log(path.join(dir, file));
  const nayaPAth = path.join(
    "C:\\Users\\91956\\OneDrive\\Desktop\\New Folder (51)\\WEB-DEV-by-CWH-All-Data\\video93\\organizedFiles",
    ext,
    file
  );
  // console.log(nayaPAth);

  const puranaPath = path.join(oldPath, file);
  // console.log(puranaPath);

  await fs.promises.rename(puranaPath, nayaPAth);
}
