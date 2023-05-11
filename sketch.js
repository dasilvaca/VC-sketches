// This is a p5 sketch that is intended to be used as 
// an example of WEBGL in p5.js and space transformation
// with push() and pop(), translate(), rotateX(), rotateY()

// setup
// This function is called once when the program starts.
function setup() {
    // Canvas will fill the entire container
    createCanvas(400, 400, WEBGL);
    // Set the frame rate to 60
    frameRate(60);
}

// draw
// Called directly after setup(), the draw() function continuously
// executes the lines of code contained inside its block until the
// program is stopped or noLoop() is called.
function draw() {
    // This mantain the canvas responsive as it is resized with frameRate(60)
    resizeCanvas(windowWidth - 20, windowHeight - 20);
    // Set the background to black
    background(0);
    // Move the origin to the center of the canvas
    translate(0, 0, 0);
    // Rotate the canvas on the x axis
    rotateX(frameCount * 0.01);
    // Rotate the canvas on the y axis
    rotateY(frameCount * 0.01);
    // Set the stroke color to white
    stroke(255);
    // Set the fill color to black
    fill(0);
    push();
    // Create a box with a width of 100, height of 100, and depth of 100
    box(100, 100, 100);
    pop()
    // Now lets use push() and pop() to create a new sphere
    // that is not affected by the previous transformations
    push();
    // Move the origin to the center of the canvas
    translate(0, 0, 0);
    // Set the stroke color to white
    stroke(255);
    // Set the fill color to black
    fill(0);
    // Create a sphere with a radius of 50
    // sphere(50);
    // Restore the previous transformations
    pop();


}