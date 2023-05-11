let moon_texture, earth_texture, stars_texture; //* Textures
let ligt_color, sunlight_direction; //* Light color and direction
let moon_orbit_speed, moon_rotation_speed, earth_rotation_speed; //* Sliders to control the speed of the objects
let set_earth, set_moon, set_UFO; //* Checkboxes to draw or not the objects
let space_rotationX = 0, space_rotationY = 0; //* Camera positions
let earth_radius = 200, moon_radius = earth_radius / 4, UFO_height = 10; //* Sizes of the objects

draw_axes = () => {
    stroke("red")
    line(0, 0, 0, 20, 0, 0)
    stroke("green")
    line(0, 0, 0, 0, 20, 0)
    stroke("blue")
    line(0, 0, 0, 0, 0, 20)
}

draw_earth = () => {
    push()
    noStroke()
    texture(earth_texture)
    sphere(earth_radius)
    pop()
}

draw_moon = () => {
    push()
    noStroke()
    rotateY(frameCount * moon_rotation_speed.value())
    texture(moon_texture)
    sphere(moon_radius)
    pop()
}

draw_UFO = () => {
    push()
    noStroke()
    specularMaterial(0, 255, 0)
    fill(0, 255, 0)
    ellipsoid(2 * UFO_height, UFO_height, 2 * UFO_height)
    translate(0, -UFO_height, 0)
    specularMaterial(0, 100, 255)
    fill(0, 0, 255)
    sphere(UFO_height)
    pop()
}

preload = () => {
    moon_texture = loadImage('moon_texture.jpg');
    earth_texture = loadImage('earth_texture.jpg');
    stars_texture = loadImage('stars_texture.jpg');
}

function setup() {
    createCanvas(400, 400, WEBGL);
    angleMode(mode = "degrees")
    frameRate(60);
    set_earth = createCheckbox("draw earth", true)
    set_earth.position(20, 40)
    set_earth.style("color", "blue")
    set_moon = createCheckbox("draw moon", true)
    set_moon.position(20, 60)
    set_moon.style("color", "blue")
    set_UFO = createCheckbox("draw UFO", true)
    set_UFO.position(20, 80)
    set_UFO.style("color", "blue")
    earth_rotation_speed = createSlider(0, 1, 0.1, 0.01)
    earth_rotation_speed.position(20, 100)
    moon_rotation_speed = createSlider(0, 1, 0.1, 0.01)
    moon_rotation_speed.position(20, 120)
    moon_orbit_speed = createSlider(-1, 1, 0.1, 0.01);
    moon_orbit_speed.position(20, 140)
};

draw = () => {
    background(0)
    light_color = color(255, 255, 255); //* Makes the light white
    resizeCanvas(windowWidth - 20, windowHeight - 20); //* This make the canvas responsive
    rotateX(space_rotationX); //* This emulates the camera rotation
    rotateY(space_rotationY); //* This emulates the camera rotation
    directionalLight(255, 255, 255, new p5.Vector(-0.5, 0, -0.5));
    push();
    rotateY(frameCount * earth_rotation_speed.value()); // Make earth rotate into its own axis
    push()
    set_earth.checked() ? draw_earth() : draw_axes();
    push()
    rotateZ(30) //! This makes the UFO to dont spawn on North Pole
    rotateX(30) //! This makes the UFO to dont spawn on North Pole
    translate(0, -UFO_height - earth_radius, 0) //* Moves the next coordinate system at the earth border plus a bit of space
    set_UFO.checked() ? draw_UFO() : draw_axes();
    translate(earth_radius, 0, 0)
    pop()
    pop()
    pop()
    fill(255);
    push()
    rotateY(frameCount * moon_orbit_speed.value()); //* Makes moon to orbit around earth
    translate(height / 2, 70, 0);
    set_moon.checked() ? draw_moon() : draw_axes();
    pop();
}

mouseDragged = () => {
    space_rotationX -= mouseY / 1000;
    space_rotationY += mouseX / 1000;
}
mouseClicked = () => {
    console.log("mouse clicked")
}