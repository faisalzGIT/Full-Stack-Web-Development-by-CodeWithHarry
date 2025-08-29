"use server"

import fs from "fs/promises";

export const submitAction = async (e) =>{
        console.log(e.get('name'),e.get('addr'));
        let a = await fs.writeFile("newUser.txt", `My Name is ${e.get('name')} and address is ${e.get('addr')}`);
    }