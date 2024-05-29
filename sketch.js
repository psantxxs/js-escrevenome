function setup() {
    createCanvas(400, 400);
   background("white")
  }
  
  function draw() {
    
    
    stroke("pink")
    fill("blue")
   
  //console.log(mouseIsPressed);
    if (mouseIsPressed) {
  rect(mouseX,mouseY,15,25)
    }
  }