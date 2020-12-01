var first;
var second;

function setup() {

  createCanvas(720, 720);
  //first=new Die(width/2,height/2);
  //second=new Die(100,100);
  noLoop();

}

function draw() {
  //your code here
  background(80);
  var total = 0;
  var die = 0;

  for (var x = 30; x < 690; x += 60) {
    for (var y = 30; y < 580; y += 60) {
      die = (int)(Math.random() * 6 + 1);
      total += die;
      var dice = new Die(x, y, die);
      //dice.roll();
      dice.show();

    }
  }
  //dice.showTotal(total);
  //println(die);
  textSize(30);


  //redraw();
  text("Total:" + total, 100, 690);

}

function mousePressed() {
  redraw();
}





class Die {

  constructor(x, y, total) //constructor
  {
    //variable initializations here
    this.x = x;
    this.y = y;
    this.dieNum = total;
  }
  roll() {
    this.dieNum = (int)(Math.random() * 6 + 1);
    console.log(dieNum);

  }

  showTotal(total) {
    textSize(30);
    text("Total:" + total, 100, 690);
  }

  show() {
    //your code here
    fill(255);
    rect(this.x, this.y, 50, 50);
    if (this.dieNum == 1) {
      fill(0);
      ellipse(this.x + 25, this.y + 25, 10, 10);
    }
    if (this.dieNum == 2) {
      fill(0);
      ellipse(this.x + 10, this.y + 10, 10, 10);
      ellipse(this.x + 40, this.y + 40, 10, 10);
    }
    if (this.dieNum == 3) {
      fill(0);
      ellipse(this.x + 10, this.y + 10, 10, 10);
      ellipse(this.x + 40, this.y + 40, 10, 10);
      ellipse(this.x + 25, this.y + 25, 10, 10);
    }
    if (this.dieNum == 4) {
      fill(0);
      ellipse(this.x + 10, this.y + 10, 10, 10);
      ellipse(this.x + 40, this.y + 40, 10, 10);
      ellipse(this.x + 40, this.y + 10, 10, 10);
      ellipse(this.x + 10, this.y + 40, 10, 10);
    }
    if (this.dieNum == 5) {
      fill(0);
      ellipse(this.x + 10, this.y + 10, 10, 10);
      ellipse(this.x + 40, this.y + 40, 10, 10);
      ellipse(this.x + 40, this.y + 10, 10, 10);
      ellipse(this.x + 10, this.y + 40, 10, 10);
      ellipse(this.x + 25, this.y + 25, 10, 10);
    }
    if (this.dieNum == 6) {
      fill(0);
      ellipse(this.x + 10, this.y + 10, 10, 10);
      ellipse(this.x + 10, this.y + 25, 10, 10);
      ellipse(this.x + 10, this.y + 40, 10, 10);

      ellipse(this.x + 40, this.y + 40, 10, 10);
      ellipse(this.x + 40, this.y + 25, 10, 10);
      ellipse(this.x + 40, this.y + 10, 10, 10);
    }

  }
}