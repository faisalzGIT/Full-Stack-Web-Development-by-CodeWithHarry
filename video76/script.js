async function main() {
  // async function getData() {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(34);
  //     }, 4000);
  //   });
  // }
  async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await x.json();
    return data;
  }       
       
  console.log("loading mods");
  console.log("doing ssomething else");
  console.log("load data");
         
  let data = await getData();
  console.log(data); 
       
  console.log("process data");
  console.log("Task 2");
}       
       
main();