var startX=240;
var startY=0;
var endX=240;
var endY=0;

function setup() {
  createCanvas(480, 400);
	background(0);
	strokeWeight(3);
}

function draw() {
	noStroke();
	fill(107,107,107);
	var x=0;
		while(x<480){
		ellipse(x,0,100,100);
		x=x+50;
	 }
	
fill(50,97,21);
	rect(-1,375,481,25);
	
  stroke(255,255,(Math.random()*256));
	
	while(endX<480){
	  endY=(startY + (Math.random()*10));
		endX=(startX + (Math.random()*20-9));
		line(startX,startY,endX,endY);
		startX=endX;
		startY=endY;
	}
}

function mousePressed(){
 startX=(Math.random()*480);
 startY=0;
 endX=240;
 endY=0;
}
