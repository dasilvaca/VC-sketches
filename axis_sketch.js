let moon_texture;
let earth_texture;
let ligt_color;
let sunlight_direction;
let stars_texture;
let moon_orbit_speed;
let moon_rotation_speed;
let earth_rotation_speed;

function draw_axis() {
    stroke("red")
    line(0, 200, 0, 0, 0)
}

function draw_orbit() {
}

preload = () => {
    moon_texture = loadImage('moon_texture.jpg');
    earth_texture = loadImage('unnamed.jpg');
    stars_texture = loadImage('stars_texture.jpg');
}

function setup() {
    createCanvas(400, 400, WEBGL);
    frameRate(60);
    earth_rotation_speed = createSlider(0, 0.5)
    moon_rotation_speed = createSlider(0, 0.5);
    moon_orbit_speed = createSlider(0, 0.5);
    moon_orbit_speed.position(20, 20)
};

draw = () => {
    background(0)
    // texture(stars_texture)
    // quad(-width, height, -height / 2, width, height, -height / 2, width, -height, -height / 2, -width, -height, -height / 2)
    // background(stars_texture)
    light_color = color(255, 255, 255)
    resizeCanvas(windowWidth - 20, windowHeight - 20);
    // sunlight_position = new p5.Vector(-(width / 2), -(height / 2), -1)
    // pointLight(light_color, sunlight_position)
    push()
    // rotateZ(0.3); // Rotates earth a bit
    // rotateY(frameCount * 0.01); // Make earth rotate into its own axis
    push()
    // noStroke();
    // fill(0);
    // texture(earth_texture);
    // sphere(height / 6);
    draw_axis()
    pop()
    // stroke("white");
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