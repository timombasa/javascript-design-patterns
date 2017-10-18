
var elem = document.getElementById("cat-1-pic");
var clicksLabel = document.getElementById("clicks-label");
var catClicks = 0;

elem.addEventListener("click", function(){
	  catClicks++;
	  // clicksLabel.innerHTML = "Cat Clicks: " + catClicks;
	  clicksLabel.textContent = "Cat Clicks: ";
	  clicksLabel.innerHTML = clicksLabel.textContent + catClicks;
}, false);