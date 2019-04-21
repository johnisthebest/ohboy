//middle

function positionTheDot() {

  // What percentage down the page are we? 
  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  // Get path length
  var path = document.getElementById("theMotionPath8");
 
  var pathLen = path.getTotalLength();
 
  
  // Get the position of a point at <scrollPercentage> along the path.
  var pt = path.getPointAtLength(scrollPercentage * pathLen);
  
  
  // Position the red dot at this point
  var dot = document.getElementById("dot8");
 
  dot.setAttribute("transform", "translate("+ pt.x + "," + pt.y + ")");
  
  
};

// Update dot position when we get a scroll event.
window.addEventListener("scroll", positionTheDot);

// Set the initial position of the dot.
positionTheDot();


