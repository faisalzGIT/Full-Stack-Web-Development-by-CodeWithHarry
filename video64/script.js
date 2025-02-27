/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
*/

let ran = Math.random();
let first, second, third;
//0 0.33 0.66 1

//first random word
if(ran<0.33){
    first = "Crazy";
}
else if(ran<0.66 && ran>=0.33){
    first = "Amazing";
}
else{
    first = "Fire";
}


//Second random word
ran = Math.random();
if(ran<0.33){
    second = "Engine";
}
else if(ran<0.66 && ran>=0.33){
    second = "Foods";
}
else{
    second = "Garments";
}

// third random word 
ran = Math.random();
if(ran<0.33){
    third = "Bros";
}
else if(ran<0.66 && ran>=0.33){
    third = "Limited";
}
else{
    third = "Hub";
}

console.log(`${first} ${second} ${third}`)

