let moon_texture;
let earth_texture;
let ligt_color;
let sunlight_position;
let stars_texture;
let moon_orbit_speed;
let moon_rotation_speed;
let earth_rotation_speed;

function axis() {
    line(0, 20, 0 ,0 , 0)
    stroke("red")
}

preload = () => {
    moon_texture = loadImage('moon_texture.jpg');
    earth_texture = loadImage('earth_texture.jpg');
    stars_texture = loadImage('stars_texture.jpg');
}

function setup() {
    createCanvas(400, 400, WEBGL);
    frameRate(60);
    earth_rotation_speed = createSlider(0,0.5)
    moon_rotation_speed = createSlider(0,0.5);
    moon_orbit_speed = createSlider(0, 0.5);
    moon_orbit_speed.position( 20,20)
};

draw = () => {
    background(0)
    texture(stars_texture)
    quad(-width, height, -height / 2, width, height, -height / 2, width, -height, -height / 2, -width, -height, -height / 2)
    // background(stars_texture)
    light_color = color(255, 255, 255)
    resizeCanvas(windowWidth - 20, windowHeight - 20);
    sunlight_position = new p5.Vector(-(width / 2), -(height / 2), -1)
    pointLight(light_color, sunlight_position)
    push()
    rotateZ(0.3);
    rotateY(frameCount * 0.01);
    push()
    noStroke();
    fill(0);
    texture(earth_texture);
    sphere(height / 6);
    pop()
    stroke("white");
    circle(0, 0, 70);
    fill(255);
    push()
    // rotateZ(-0.85)
    translate(height / 2, 70, 0);
    rotateX(frameCount * 0.015);
    noStroke();
    texture(moon_texture)
    sphere(height / 13);
    pop();
    pop();

}