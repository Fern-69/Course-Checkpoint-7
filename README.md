# COURSE_CHECKPOINT-7
&nbsp;

![Carátula de Portada](JavaScript-Logo.png)
&nbsp;

## ¿Qué diferencia a Javascript de cualquier otro lenguaje de programación?
&nbsp;
&nbsp;&nbsp;&nbsp;JavaScript es muy diferente a otros lenguajes de programación:
1. Es un lenguaje que se ejecuta directamente en el navegador, sin compilación previa (Interpretado):
   - JavaScript puede ejecutarse directamente en el navegador sin precompilación. Por ejemplo, al abrir un archivo HTML con código JavaScript en un navegador, este lo interpreta y ejecuta línea por línea.
   - Java es un lenguaje compilado y su código fuente debe compilarse en código de bytes antes de su ejecución.
2. Es Dinámico y flexible. No requiere declarar tipos de variables:
   - En JavaScript (lenguajes de tipado dinámico) No se especifica el tipo de variable, y se puede reasignar. Por ejemplo,
 
         let x = 5;      // x es number
     
         x = "hola";     // Ahora x es string (¡sin error!)
     
   - En otros lenguajes (lenguajes de tipado estático), se debe declarar el tipo, y no se puede cambiar. Por ejemplo,
 
         int x = 5;      // x siempre será int   
     
         x = "hola";     // ¡Error de compilación!
     
3. Tiene un alcance (scope) diferente a otros lenguajes, ya que combina alcance de función (var) y bloque (let/const).
   &nbsp;&nbsp;&nbsp;Alcance de Función (Function Scope)

            function ejemplo() {
   
               if (true) {
   
               var x = 10; // ¡Alcance de FUNCIÓN!
   
            }
   
            console.log(x); // 10 (accesible fuera del bloque if)
   
   &nbsp;&nbsp;&nbsp;Alcance de Bloque (Block Scope)
   
            function ejemplo() {
   
               if (true) {
   
               let y = 20;   // Alcance de BLOQUE
   
               const z = 30; // Alcance de BLOQUE
   
             }
   
             console.log(y); // ¡Error! y no está definida aquí   
   
             console.log(z); // ¡Error! z no está definida aquí
   
             }

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Otros lenguajes suelen ser más consistentes (todo bloque o todo función). En el caso de ***Python/Ruby*** se parecen a **JavScript** con `let`, pero sin el problema histórico de `var`. En el caso de ***C/Java/C#***, siempre bloque (las variables viven dentro de `{}`)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En el caso de variables en bucles, con **JS** `var` se comparte en iteraciones (¡problemas con  <ins>closures:</ins>! *Función que recuerda su entorno original, incluso cuando se ejecuta fuera de ese entorno*), pero se resuelve con `let`; similar en ***Python/Ruby***. Pero en ***C/Java/C#***, cada iteración tiene su propia variable.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En **JS** `var` se "eleva" (<ins>hoisting:</ins> *comportamiento donde las declaraciones de variables y funciones se mueven al inicio de su ámbito **(scope)** antes de que se ejecute el código*), `let/const` también pero no se inicializan. En el caso de ***C/Java/C#*** no aplica, y se produce un error si usas antes de declarar.

D. Programación asincrónica--------------



7. Diseñado para la web (y más allá)
Nativo en navegadores: Es el único lenguaje que todos los navegadores entienden nativamente (junto con WebAssembly, pero este es de bajo nivel).
Asíncrono y orientado a eventos: Maneja operaciones no bloqueantes (como peticiones HTTP) con callbacks, promesas y async/await.

8. Compatibilidad y evolución
ECMAScript: El estándar que define JS se actualiza casi anualmente (ES6, ES2023, etc.), añadiendo mejoras como let/const, arrow functions, módulos, etc.
Backward compatibility: Código escrito hace 20 años aún funciona en navegadores modernos. Compatibilidad con todas las versiones: Código de 1995 sigue funcionando hoy. (¡pero puede tener vulnerabilidades!).
ECMAScript: El "manual de instrucciones" de JavaScript 📜
¿Qué es?
Es el estándar oficial que define cómo debe funcionar JavaScript. Es como la receta de un pastel que todos los fabricantes de navegadores (Chrome, Firefox, etc.) siguen. Actualizaciones anuales (ES6, ES2023, etc.) Cada año se añaden mejoras al lenguaje, como si actualizaras tu teléfono.
9. Backward Compatibility: "Lo viejo no muere" 🕰️
¿Qué significa?
Que el código JavaScript escrito hace décadas sigue funcionando en navegadores modernos sin modificaciones. 
Ventaja: No hay que reescribir todo cada año. Desventaja: Código antiguo puede tener vulnerabilidades o malas prácticas.
Comparación: Imagina que tu PlayStation 5 pudiera ejecutar juegos de PlayStation 1 sin cambios. ¡Genial!, pero algunos juegos antiguos tendrían gráficos feos o bugs.
¿Por qué es importante entender esto?
Para desarrolladores: Usa features modernas (ES6+) para escribir código más limpio y seguro. Pero comprueba la compatibilidad con navegadores antiguos si tu audiencia los usa (ej: IE11).
Para usuarios: Los sitios web no se "rompen" con el tiempo, pero pueden volverse lentos o inseguros si usan código obsoleto.
10. 📦 El ecosistema más grande (NPM) 1.5 millones de paquetes públicos (muchos abandonados). Instalación trivial pero con riesgo de "dependency hell"
11. Funciones = Objetos VIP
Puedes:Pasar funciones como argumentos. Devolver funciones
12. Coerción de tipos
Conversiones automáticas que ahorran código pero causan confusiones:

   ``` "5" + 3 = "53" // Concatena (el + prefiere strings)```\
   
   ``` "5" - 3 = 2    // Resta, convierte "5" a número```\
   
   ``` [] == ![]      // true (¡sí, leíste bien!)```
  
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Solución: Usar === (comparación estricta).
Por qué es único JavaScript?
Ningún otro lenguaje combina:
Asincronía sin hilos.
Prototipos + sintaxis de clases.
Dominio total en navegadores y servidores.
Flexibilidad extrema (para bien o mal 😅).
JavaScript se diferencia de otros lenguajes de programación en que se ejecuta directamente en el navegador web, es dinámico y está orientado a eventos. 
JavaScript se ejecuta en el navegador
No requiere instalaciones ni plugins adicionales 
Se interpreta en tiempo de ejecución, lo que permite probar y iterar el código rápidamente 
El navegador recibe el código JavaScript en su forma de texto original y lo ejecuta 
JavaScript es dinámico 
Permite cambiar el tipo de una variable durante la ejecución del programa
Es un lenguaje de tipado débil, lo que significa que las conversiones de tipo se realizan de manera implícita



&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

---------------------------------------------------------------------------------------------------------------------------------
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
## ¿Cuáles son algunos tipos de datos JS?
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

---------------------------------------------------------------------------------------------------------------------------------
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
## ¿Cuáles son las tres funciones de String en JS?
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

---------------------------------------------------------------------------------------------------------------------------------
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
## ¿Qué es un condicional?
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

---------------------------------------------------------------------------------------------------------------------------------
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
## ¿Qué es un operador ternario?
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

---------------------------------------------------------------------------------------------------------------------------------
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
## ¿Cuál es la diferencia entre una declaración de función y una expresión de función?
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

---------------------------------------------------------------------------------------------------------------------------------
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
## ¿Qué es la palabra clave "this" en JS?
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

---------------------------------------------------------------------------------------------------------------------------------

## ¿Qué es la palabra clave "this" en JS?
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

---------------------------------------------------------------------------------------------------------------------------------
