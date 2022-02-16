var x = 0;
var y = 0;

window.onload = function drawCircle() {
    //alert('hello world');
    background(255, 255, 255);
    
    noStroke();
    fill(79, 255, 94);
    
    // Moves across the canvas, getting taller
    ellipse(x, 200, 30, 30+x/3);
    
    // Moves down the canvas, getting wider
    ellipse(200, y, 30+y/3, 30);
    
    // Add one to each of the variables
    x++;
    y++;
};

