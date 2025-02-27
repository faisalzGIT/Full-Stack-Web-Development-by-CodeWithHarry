console.log("ENTER");

// WRITE IN YOUR NOTES WHAT DID U LEARN NEWW ⭕💯💯💯💯💯💯💯
// WRITE IN YOUR NOTES WHAT DID U LEARN NEWW ⭕💯💯💯💯💯💯💯
// WRITE IN YOUR NOTES WHAT DID U LEARN NEWW ⭕💯💯💯💯💯💯💯
// WRITE IN YOUR NOTES WHAT DID U LEARN NEWW ⭕💯💯💯💯💯💯💯

document.addEventListener('DOMContentLoaded', function() {
  let mybtn = document.getElementById('btn');
  
  function createCard(title, cName, views, monthsOld, duration, thumbnail) {
	  let html = `<div class="card">
				<div class="thumb">
					<div class="duration">${duration}</div><img src="${thumbnail}">
				</div>
				<div class="right">
					<div class="title">${title}</div>
					<div class="cname">${cName} &nbsp; • &nbsp;</div>
					<div class="views">${views} &nbsp; • &nbsp;</div>
					<div class="months">${monthsOld}</div>
				</div>
			</div>`
	document.querySelector(".container").innerHTML = html;
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

