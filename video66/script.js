
function asd(bool) {
    let a = prompt("Enter AGE:");
    if(a<=0) console.error("IT NON FACTUAL")
    else if(a>17){
        alert("YOU CAN DRIVE")
    }
    else alert("u cannot drive")

    let ab = confirm("Click ok if u want to see prompt again")
    if(ab==true){
        asd("again")
    }
    else stop;
}

asd("start");





