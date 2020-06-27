
var canvasWidth,canvasHeight;
var drawing = [];

function setup() {
  canvasWidth = windowWidth;
  canvasHeight= windowHeight;
  createCanvas(canvasWidth,canvasHeight);
  
}

function draw() {
  background("black");

  if(mouseIsPressed){
    var point = {
      x:mouseX,
      y:mouseY
    }
    drawing.push(point);
  }
   beginShape();
   stroke(255);
   strokeWeight(6);
   noFill();
  for ( var i = 0; i < drawing.length ; i++  ){
  vertex(drawing[i].x , drawing[i].y)
  }
  endShape();

}

 //function mousePressed(){
  // if mousePressed(){

  // }

// }

//function mouseReleased(){

//}STROKE WEIGHT 