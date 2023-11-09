function setup() {
    createCanvas(400, 400);
    background("purple");
  }
  
  function draw() {
    stroke("black");
    fill("rgb(255,1,255)");
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 20);
    }
  }
  