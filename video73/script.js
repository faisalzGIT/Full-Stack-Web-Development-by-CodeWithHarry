console.log("ENTER");

// WRITE IN YOUR NOTES WHAT DID U LEARN NEWW ⭕💯💯💯💯💯💯💯
// WRITE IN YOUR NOTES WHAT DID U LEARN NEWW ⭕💯💯💯💯💯💯💯
// WRITE IN YOUR NOTES WHAT DID U LEARN NEWW ⭕💯💯💯💯💯💯💯
// WRITE IN YOUR NOTES WHAT DID U LEARN NEWW ⭕💯💯💯💯💯💯💯

document.addEventListener('DOMContentLoaded', function() {
  let mybtn = document.getElementById('btn');

  function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let jscontainer = document.getElementById("htm-cont"); // main container  
    let jscard = document.createElement("div"); // created div for card
    jscard.className = "card"; // giving class to div created for card
    jscontainer.appendChild(jscard); // adding card div to the container
  
    // Now adding thumbnail and right side to the card div
    // Firstly making thumbnail side
    let jsthumbnaildiv = document.createElement("div"); // create div for thumbnail-side
    jsthumbnaildiv.className = "thumb"; // giving class to it
    jscard.appendChild(jsthumbnaildiv); // adding to the card div
  
    // Secondly making right side
    let jsright_side = document.createElement("div"); // create div for right-side
    jsright_side.className = "right"; // giving class to it
    jscard.appendChild(jsright_side); // adding to the card div
  
    // 1st setting title name
    let jstitle = document.createElement("div");
    jstitle.className = "title";
    jstitle.innerHTML = title;
    jsright_side.appendChild(jstitle); // Append directly to jsright_side
  
    // 2nd setting channel name
    let jscname = document.createElement("div");
    jscname.className = "cname";
    jscname.innerHTML = cName + "&nbsp; • &nbsp;";
    jsright_side.appendChild(jscname); // Append directly to jsright_side
  
    // 3rd setting views
    let jsviews = document.createElement("div");
    jsviews.className = "views";
    jsviews.innerHTML = formatnumber(views) + "&nbsp; • &nbsp;"; // VIEWS TO BE SETUP TO TURN INTO K
    jsright_side.appendChild(jsviews); // Append directly to jsright_side
  
    // 4th setting months old
    let jsmonthsold = document.createElement("div");
    jsmonthsold.className = "months";
    jsmonthsold.innerHTML = monthsOld + " months ago";
    jsright_side.appendChild(jsmonthsold); // Append directly to jsright_side
  
    // 5th setting duration
    let jsduration = document.createElement("div");
    jsduration.className = "duration";
    jsduration.innerHTML = duration;
    jsthumbnaildiv.prepend(jsduration); // Prepend directly to jsthumbnaildiv
  
    // 6th setting thumbnail image
    let jsthumbimg = document.createElement("img");
    jsthumbimg.src = thumbnail; // Setting the source
    jsthumbnaildiv.appendChild(jsthumbimg); // Append directly to jsthumbnaildiv
  }

  mybtn.addEventListener('click', function() {
    createCard(prompt('Enter Title:'), prompt('Enter Channel Name:'), prompt('Enter Views:'), prompt('Enter Months Old:'), prompt('Duration'), prompt('Enter link for Thumbnail:'));
  });
});

function formatnumber(num) {
  let formattedNum;
  if (num >= 1000000) {
    formattedNum = (num / 1000000).toFixed(1);
  } else if (num >= 1000) {
    formattedNum = (num / 1000).toFixed(1);
  } else {
    return num.toString();
  }
  
  // Remove trailing zeros and the decimal point if not needed
  formattedNum = formattedNum.replace(/\.0$/, '');

  return formattedNum + (num >= 1000000 ? 'M' : 'k');
}

let by = 5.788;
console.log(by.toString());
let by2 = by.toFixed(2);
console.log(by2);