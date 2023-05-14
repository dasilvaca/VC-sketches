# Guía sobre WEBGL en P5.js

## Contenido

1. Sistemas coordenados
2. ¿Qué es render?
3. Rendering Pipeline
4. Rasterización
5. ¿Qué es WEBGL?
6. ¿Qué es un shader?
7. Tipos de shaders
8. Referencias y otras guías

## Sistemas coordenados

Un sistema coordenado es un sistema de referencia que se utiliza para representar puntos en el espacio. En un plano bidimensional, estamos acostumbrados a utilizar dos ejes, ambos paralelos entre sí. Uno de ordenadas (eje vertical) y otro de abscisas (eje horizontal). Donde, el punto 0,0 se encuentra en la intersección de ambos ejes y se conoce como origen. Suele posicionarse en el centro del plano.

Sin embargo, como hemos observado, cuando trabajamos en un canvas, como en p5, el "origen" suele ubicarse en la esquina superior izquierda del mismo. Los valores de $x$ aumentan hacia la derecha y los de $y$ hacia abajo.

De manera similar ocurre en un espacio tridimensional. Consideramos tres ejes, $x$, $y$ y $z$. El origen se encuentra en el punto donde se intersectan los tres ejes. Los valores de $x$ aumentan hacia la derecha, los de $y$ hacia abajo y los de $z$ hacia el frente(indicando una profundidad de los objetos que están proyectados en nuestro canvas, o pantalla, que por el momento continúa siendo bidimensional). Salvo que, en este caso, el origen se encuentra en el centro del espacio, es decir, nuestro canvas.

En WEBGL, utilizamos un sistema coordenado llamado [clipspace](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_model_view_projection). Donde las coordenadas son normalizadas. Es decir, sobre el espacio que se ha delimitado, sea un objeto en concreto o el mismo espacio (canvas), todas las coordenadas dentro de ellas se representarán con valores entre -1 y 1 (inclusive). De esta manera, tenemos una forma de expresar el comportamiento de estos espacios, sin que por ahora nos preocupemos por las dimensiones reales de los mismos. Hablaremos de WEBGL más adelante en esta misma guía, sin embargo, desde este momento podemos definir el espacio sobre el cual este trabaja.

![Clipspace WEBGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_model_view_projection/clip_space_graph.svg "Clipspace WEBGL")

## ¿Qué es render?

El render (traducido literalmente como "representación" o "retrato") involucra el proceso de la creación automática de una escena basandose en un módelo que puede ser bidimensional o tridimensional. Se puede decir que es la representación o proyección de un modelo en una pantalla.

## Canales de Renderizado (O capas de renderizado - *Rendering Pipeline*)

El *Rendering Pipeline* es una secuencia de pasos que OpenGl (y por lo tanto WEBGL) realiza para generar una imagen a partir de un modelo, es decir, para renderizar un objeto.

Los pasos se resumen en los siguientes:

![Rendering Pipeline](https://www.khronos.org/opengl/wiki_opengl/images/RenderingPipeline.png "Rendering Pipeline")

## ¿Qué es rasterización y en qué se diferencia del render?

Raster es una etapa del de renderizado que consiste en la conversión de una imagen vectorial en una imagen de mapa de bits (o cualquier salida dígital como una impersora o pantalla). [Consta de dos etapas](https://visualcomputing.github.io/docs/rendering/#rasterization). La primera considera la conversión de las primitivas geométricas en píxeles, es decir, la representación geométrica de los vectores definidos en la pantalla. La segunda, la determinación de los valores de color de los píxeles. Esto considera, dado un poligono, primero, qué elementos de la cuadrilla (pixeles) hacen parte del interior del poligono, y posteriormente, con una serie de reglas que definimos de acuerdo a lo que queremos hacer con esa geometría, se indica con qué colores debería "rellenarse" o "pintar" esos pixeles.

## ¿Qué es WEBGL?

[WEBGL](https://www.khronos.org/webgl/) (WEB Graphic Library), es una derivación escrita para JavaScript de la librería gráfica OpenGL (*OpenGL ES* ó *OpenGL EcmaScript*). Es una API que permite la creación de gráficos 3D interactivos dentro de cualquier navegador web compatible sin la necesidad de utilizar plugins, usando de lenguaje para shaders GLSL (OpenGL Shading Language).

## ¿Qué es un shader?

Un [shader](https://www.khronos.org/opengl/wiki/Shader) es un programa que se ejecuta en la GPU (Graphics Processing Unit) y que se encarga de realizar cálculos sobre los vértices y fragmentos de una geometría. Los vértices son los puntos que definen la geometría y los fragmentos son los pixeles que se encuentran dentro de la geometría. Los shaders se escriben en un lenguaje llamado [GLSL (OpenGL Shading Language)](https://www.khronos.org/opengl/wiki/OpenGL_Shading_Language).

## Tipos de shaders

Existen dos tipos de shaders: los vertex shaders y los fragment shaders. Los primeros se encargan de realizar cálculos sobre los vértices de una geometría, mientras que los segundos se encargan de realizar cálculos sobre los fragmentos de una geometría.

Los ejemplos más sencillos de estos, serían los siguientes:

### Vertex Shader

```glsl
precision mediump float;

attribute vec3 aPosition;

void main() {
  gl_Position = vec4(aPosition, 1.0);
}
```

Donde estamos indicando, con la ayuda de un atributo que nos otorga la librería (el atributo es `aPosition`), que la posición de cada vértice de la geometría se encuentra en la variable `aPosition`. Posteriormente, en la función `main`, asignamos a la variable `gl_Position` el valor de `aPosition` con una cuarta componente igual a 1.0. Esto último es necesario para que el vértice se pueda proyectar en el espacio. El componente w corresponde a la coordenada homogénea, que es un concepto que se utiliza para realizar transformaciones lineales en el espacio, de lo que hablaremos más adelante.

### Fragment Shader

```glsl

precision mediump float;

void main() {
  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}
```

En esta ocasión, nuestro objetivo es mapear bit a bit cada fragmento de la geometría. Para ello, utilizamos la variable `gl_FragColor` que corresponde al color del fragmento. En este caso, estamos asignando el color rojo a cada fragmento. (El color también está en valores normalizados. Es decir, que cada componente del color está entre 0 y 1 inclusive, y cada componente de este vector corresponde a un canal de color. RGBa es el seleccionado por defecto).

## Referencias y otras guías

- [WEBGL en p5.js](https://p5js.org/es/reference/#/p5/createGraphics)
- [WEBGL Reference guides](https://www.khronos.org/developers/reference-cards/)
- [OpenGL ES 2.0 Reference Card](https://www.khronos.org/files/opengles_shading_language.pdf)
- [OpenGL Wiki](https://www.khronos.org/opengl/wiki/Main_Page)
- [OpenGL ES official site](https://www.khronos.org/opengles/)
- [Mozilla WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)
