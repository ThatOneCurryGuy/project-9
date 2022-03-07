//global variables
var score = 0
var a

function setup() {
  createCanvas(400,400);
  a = createSprite(200,200,20,20)
}

function draw() 
{
  //background(30);
  if(keyIsDown(UP_ARROW)){
    a.position.y -= 5
    background("red")
  }
  if(keyIsDown(DOWN_ARROW)){
    a.position.y += 5
    background("orange")
  }
  if(keyIsDown(LEFT_ARROW)){
    a.position.x -= 5
    background("yellow")
  }
  if(keyIsDown(RIGHT_ARROW)){
    a.position.x += 5
    background("tan")
  }
  drawSprites()
}




