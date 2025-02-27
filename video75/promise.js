let p1 = new Promise((resolve,reject)=>{
        console.log('the promise resolve is pending');
        
        setTimeout(()=>{                
                console.log("the promise resolved wala");
                resolve(true);
        },2000);
});

let p2 = new Promise((resolve,reject)=>{
        console.log('the promise reject is pending');
        
        setTimeout(()=>{                
                console.log("the promise is reject wala");
                reject(new Error('The Error here'));
        },2000);
});

console.log(p2);//  FOR printing both promises
console.log(p1);//  FOR printing both promises

// .then
// p1.then((value)=>{
//         console.log(value);
// });

// //.catch for catching Errors
// p2.catch((error)=>{
//         console.log('Some error spotted in p2');
//         console.log(error);//this will print what is given in 15th line in clo        
// })

//reactions to both resolve and reject
// p2.then((value)=>{
//         console.log(value);
// },(error)=>{
//         console.log('Some error spotted in p2');
// }); 





