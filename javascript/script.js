
function setup() {
  var canvas = createCanvas(500,500);
	fill(82, 165, 255);
	rect(0,0,500,500);
	fill(255);
  rect(0,450,499,49);
	
	
}

function draw() {
  fill(255);
	ellipse(250, 380, 200, 200);
	ellipse(250, 275, 150, 150);
	ellipse(250, 175, 100, 100);
	fill(0);
	ellipse(225,155,15,15);
	ellipse(275,155,15,15);
	rect(225,195,50,5);
	fill(255, 153, 0);
	triangle(175,180,250,175,250,185);
	fill(77, 54, 19);
	rect(125,255,75,10);
	rect(300,255,75,10);
	fill(255, 247, 0);
	ellipse(0,0,100,100);
	fill(0);
	textSize(32);
	text("ADVCS2020 by Sajid Khan",100,100);
}

draw();