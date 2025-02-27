console.log("fg")

let el = document.body.querySelector(".box")
console.log(el.className)

el.className += " ldbrg"

console.log(el.className)


el.className = el.className.replace("box", "")


console.log(el.className)

console.log(document.querySelector(".box").dataset)


// let new_el = document.createElement("div");
// // new_el.setAttribute("class","new_elem");
// new_el.className = "fef"
// new_el.innerHTML = "hey this is inserted by js"
// document.querySelector(".container").append(new_el)



let cont = document.querySelector(".container")
cont.insertAdjacentHTML("afterend","<div>Hey this is added by insertAdjacentHTML()</div>")


cont.remove()