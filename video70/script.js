console.log("Script.js is initializing")


let boxes = document.getElementsByClassName("box")
console.log(boxes)



function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()*255);
    let val2 = Math.ceil(0 + Math.random()*255);
    let val3 = Math.ceil(0 + Math.random()*255);
    return `rgb(${val1}, ${val2}, ${val3})`
}

Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();
    
})













































































// let a,b,c,d,e,f;

// let dibbe = document.getElementsByClassName("box")



// a=Math.random();
// if( a==0 || a<0.22){
//     dibbe[0].style.backgroundColor = "red"
// }
// else if(a==0.22 || a<0.44){  
//     dibbe[0].style.backgroundColor = "blue"   
// }
// else if(a==0.44 || a<0.88){
//     dibbe[0].style.backgroundColor = "grey"
// }
// else{
//     dibbe[0].style.backgroundColor = "green"
// }

// b=Math.random();
// if( b==0 || b<0.22){
//     dibbe[1].style.backgroundColor = "red"
// }
// else if(b==0.22 || b<0.44){  
//     dibbe[1].style.backgroundColor = "blue"   
// }
// else if(b==0.44 || b<0.88){
//     dibbe[1].style.backgroundColor = "grey"
// }
// else{
//     dibbe[1].style.backgroundColor = "green"
// }

// c=Math.random();
// if( c==0 || c<0.22){
//     dibbe[2].style.backgroundColor = "red"
// }
// else if(c==0.22 || c<0.44){  
//     dibbe[2].style.backgroundColor = "blue"   
// }
// else if(c==0.44 || c<0.88){
//     dibbe[2].style.backgroundColor = "grey"
// }
// else{
//     dibbe[2].style.backgroundColor = "green"
// }

// c=Math.random();
// if( c==0 || c<0.22){
//     dibbe[3].style.backgroundColor = "red"
// }
// else if(c==0.22 || c<0.44){  
//     dibbe[3].style.backgroundColor = "blue"   
// }
// else if(c==0.44 || b<0.88){
//     dibbe[3].style.backgroundColor = "grey"
// }
// else{
//     dibbe[3].style.backgroundColor = "green"
// }

// d=Math.random();
// if( d==0 || d<0.22){
//     dibbe[4].style.backgroundColor = "red"
// }
// else if(d==0.22 || d<0.44){  
//     dibbe[4].style.backgroundColor = "blue"   
// }
// else if(d==0.44 || d<0.88){
//     dibbe[4].style.backgroundColor = "grey"
// }
// else{
//     dibbe[4].style.backgroundColor = "green"
// }

// e=Math.random();
// if( e==0 || e<0.22){
//     dibbe[5].style.backgroundColor = "red"
// }
// else if(e==0.22 || e<0.44){  
//     dibbe[5].style.backgroundColor = "blue"   
// }
// else if(e==0.44 || e<0.88){
//     dibbe[5].style.backgroundColor = "grey"
// }
// else{
//     dibbe[1].style.backgroundColor = "green"
// }



// console.log(dibbe)
// console.log(a)
