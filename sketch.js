
var r = 0;
var g = 0;
var b=255;
var shape;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);

  
 
 shape = ellipse(200,100,150,30);


function draw(){

  shape.x = World.mouseX;
  shape.y = World.mouseY;
   

background("b","b","b");


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