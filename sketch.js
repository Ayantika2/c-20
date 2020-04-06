var shape;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);
 
 shape = ellipse(200,100,150,30);


function draw(){

  shape.x = World.mouseX;
  shape.y = World.mouseY;



if (shape.x <= 400) {
  background(225,30,0);
}

if(shape.x<=800) {
  background(45,45,255);

}

if (shape.x > 800) {

}


drawSprites();



b = Map(0,225);

}
 

  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
}