var first=[];
var count=0;
function setup() {
  createCanvas(600, 600);
  frameRate(10);
  //colorMode(HSB,360);
  background(255);
  for(var i=0;i<100; i++){
    first[i] = new Bacteria();
  
  }
  
}
 
function draw() {
  background(255);
  for(var i=0;i<50; i++){
  first[i].show();
  first[i].numClick(count);
  }
  
  
}
 

function mousePressed(){
  
  count++;
  console.log(count);
  
}




class Bacteria{
 
  constructor(){
    this.xPos=(random()*600+1);
    this.yPos=(random()*600+1);
    this.size=(random()*10+5);
    //fill(random(10, 255),random(100, 255),random(10, 255));
  }
 
  
  
  show(){
    fill(random(30, 255),random(100, 255),random(30, 255));
    ellipse(this.xPos,this.yPos,this.size,this.size);
    this.numClick();
  }
 
  numClick(c){
    if(c%2==1){
      this.taxi();
      console.log("odd");
    }else{
      this.reverseTaxi();
      console.log("even");
    }
    
    
  }
  
  taxi() {
   if(dist(this.xPos, this.yPos, mouseX, mouseY) < 40) {
     //this.xPos = this.xPos + (int)(random(31)-15);
     //this.yPos = this.yPos + (int)(random(21)-10);
     
     this.xPos = this.xPos + (int)(random(5)-2);
     this.yPos = this.yPos + (int)(random(5)-2);
     
   } else {
     this.xPos = this.xPos + ((mouseX - this.xPos)/2);
     this.yPos = this.yPos + ((mouseY - this.yPos)/2);
   }
  }
  
  
  reverseTaxi(){
    if (dist(this.xPos, this.yPos, mouseX, mouseY) < 50) {
      this.xPos = this.xPos - ((mouseX - this.xPos) / 2);
      this.yPos = this.yPos - ((mouseY - this.yPos) / 2);
    }
  }
 
  
}