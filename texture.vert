/*
Certex shader tooked from: Shader Texture 2D - basic.vert by aferriss: https://editor.p5js.org/aferriss/sketches/m74DWvY9z
*/

precision mediump float;

attribute vec3 aPosition; // attributePosition. Builtin parameter

// P5 provides us with texture coordinates for most shapes
attribute vec2 aTexCoord;

// This is a varying variable, which in shader terms means that it will be passed from the vertex shader to the fragment shader
varying vec2 vTexCoord;

void main() {
    // Copy the texcoord attributes into the varying variable
    vTexCoord = aTexCoord;

    vec4 positionVec4 = vec4(aPosition, 1.0);
    positionVec4.xy = positionVec4.xy * 2.0 - 1.0;

    // visible vertices are only those which lie within "Normalize Device Coordinates"
    // NDC, i.e., a cube with dimensions [-1, 1] along each of its axes
    // where z = -1 is the closest plane to viewer and z = 1 is the farthest
    gl_Position = positionVec4;
}