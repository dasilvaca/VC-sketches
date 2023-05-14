let texture_shader;
let texture;

preload = () => {
    // Loads the shader, is composed of two files, a vertex and a fragment shader
    texture_shader = loadShader('texture.vert', 'texture.frag'); 
    // Loads the texture. in this case, an image
    texture = loadImage('kitten_texture.jpg');
};

setup = () => {
    createCanvas(700, 500, WEBGL);
    shader(texture_shader);

};

draw = () => {
    texture_shader.setUniform('tex0', texture);

}



function setup() {
  // shaders require WEBGL mode to work
  createCanvas(500, 500, WEBGL);
  
  // Resize our image
  img.resize(width, height);
}

function draw() {  

  // shader() sets the active shader with our shader
  shader(simpleShader);
  
  // Send the image to the shader
  simpleShader.setUniform("uTexture", img);

  // rect gives us some geometry on the screen
  rect(0,0,width, height);
  
}
