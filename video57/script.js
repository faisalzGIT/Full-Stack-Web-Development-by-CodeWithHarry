
let a = 1;

//for loop
for (let i = 0; i < 100; i++) {
    console.log(a+i);
}



//forin loop
//loops through the keys of an object

const obj = {
    name:'shds',
    hk: 24
}

for (const key in obj) {
        const element = obj[key];
        console.log(element);
}


const jk = {
    new:'lkfef',
    wharw:'fidget'
}

//forin loop
for (const key in jk) {
        const element = jk[key];
        console.log(key,element)
        
}

//for-of loop
for (const ite of "CARRY") {
    console.log(ite)
}

//while loop
let i = 0;
while(i<5){
    console.log(i);
    i++;
}

i=1;
do{
    console.log("_")
    console.log(i);
    i++;
}while(i<4)

