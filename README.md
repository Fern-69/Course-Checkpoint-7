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

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En el caso de variables en bucles, con **JS** `var` se comparte en iteraciones, auqnue podría haber posibles problemas con <ins>closures:</ins>, se resuelve con `let`; similar en ***Python/Ruby***; Pero en ***C/Java/C#***, cada iteración tiene su propia variable.
> [!NOTE]
> <ins>closures:</ins>! *Función que recuerda su entorno original, incluso cuando se ejecuta fuera de ese entorno*

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En **JS** `var` se "eleva" (<ins>hoisting:</ins>), `let/const` también pero no se inicializan. En el caso de ***C/Java/C#*** no aplica, y se produce un error si usas antes de declarar.
> [!NOTE]
><ins>hoisting:</ins> *comportamiento donde las declaraciones de variables y funciones se mueven al inicio de su ámbito **(scope)** antes de que se ejecute el código*

3. Programación asincrónica: **JS** permite ejecutar tareas simultáneamente sin bloquear el hilo principal, lo que la hace ideal para gestionar operaciones que consumen mucho tiempo, como solicitudes de red o la lectura de archivos. Dos operaciones asíncronas comunes en **JS** son las devoluciones de llamadas y las promesas. Frente a otros lenguajes:
   
|JavaScript|	Otros Lenguajes|
|----------|------------------|
|Un solo hilo|	Múltiples hilos|
|Nunca se bloquea: siempre está haciendo algo|	Pueden bloquearse (esperando)|
|Más lento en tareas pesadas (ej: cálculos grandes)|	Más rápidos en tareas pesadas (si usan bien los hilos)|
|Ideal para tareas de espera (APIs, archivos)|	Mejor para procesamiento en paralelo (videos, juegos)|

4. Programación síncrona: Las tareas se ejecutan una tras otra, en orden. Si una operación tarda (como leer un archivo o hacer una consulta a una ***API***), el programa se detiene hasta que termine.
   **JS** es síncrono por defecto, pero la gran diferencia frente a otros lenguajes es que no tiene operaciones de Entrada/Salida (Input/Output) síncronas por defecto en el navegador. No bloquean el hilo       principal mientras espera una respuesta y el código sigue ejecutándose (por ejemplo, una ***API***). En otros lenguajes, si no usan hilos o técnicas async, el programa se congela hasta que la operación termine.

5. Compatibilidad y evolución: **JS** es un Código escrito hace 20 años que aún funciona en navegadores modernos. ECMAScript se actualiza casi anualmente, añadiendo mejoras como let/const, arrow functions, módulos, etc., siendo la implemetación más famosa. Esto tiene la ventaja de que no hay que reescribir todo cada año. Aunque el Código antiguo puede tener vulnerabilidades o malas prácticas.
   Otros lenguajes (***Python, Java, C#***) son lenguajes + implementaciones oficiales, es decir, no separan "estándar" de "implementación" tan claramente. Suelen evolucionar más lento y con control centralizado.
   **JS** está diseñado para el navegador, por eso su modelo asíncrono (Event Loop) es único, y se integra a la perfección con ***HTML*** y ***CSS*** (añade comportamiento dinámico e interactividad a las páginas web). Los otros lenguajes están pensados para múltiples entornos, y tiene acceso total al sistema. Pueden interactuar directamente con el hardware y el SO (Leer/escribir archivos, abrir sockets de red, controlar dispositivos: cámara, USB, GPU); mientras que **JS** no puede acceder directamente al sistema operativo dependiendo de ****APIs*** del navegador.

> [!NOTE]
><ins>ECMAScript</ins> (ES) es el estándar en el que se basa JavaScript. Es como las "reglas oficiales" que definen cómo debe funcionar el lenguaje.
> ***ECMAScript*** = estándar (las reglas escritas).**JavaScript** = implementación práctica.

> [!NOTE]
>El <ins>event loop</ins> es un mecanismo de **JavaScript** que ejecuta tareas asíncronas de forma no bloqueante. Funciona en un ciclo infinito, esperando por una tarea, ejecutando la tarea requerida y volviendo a esperar por una nueva tarea (Gestiona la cola de tareas, determina el orden de ejecución, sincroniza la ejecución de tareas, revisa la cola de tareas y ejecutar cada una de ellas en orden)

Versiones más importantes de ECMAScript:

|Año|	Versión|	Novedades Principales|
|---|--------|----------------------|
|2009|	ES5|	"use strict", JSON.parse, Array.map/filter|
|2015|	ES61 (ES2015)|	let/const, arrow functions, promesas, clases, template strings|
|2016|	ES7|	Array.includes(), operador ** (exponenciación)|
|2017|	ES8|	async/await, Object.values()/entries()|
|2020|	ES11|	Optional Chaining (?.), Nullish Coalescing (??)|
|2023|	ES14|	Array.findLast(), Hashbang Grammar|


6. **JavaScript** cuenta con un ecosistema rico (NMP) y diverso de bibliotecas y frameworks que mejoran considerablemente sus capacidades y hacen que el desarrollo sea más eficientete. Poseé 1.5 millones de paquetes públicos (muchos abandonados). Instalación trivial pero con riesgo de "dependency hell"
11. Funciones = Objetos VIP
avaScript → Ecosistema Fragmentado (npm)
No hay "baterías incluidas": Necesitas librerías para casi todo.

Ej: axios (HTTP), moment (fechas), lodash (utilidades).

Ventaja: Gran flexibilidad.

Desventaja: Dependencia excesiva de paquetes externos.Otros Lenguajes → Librerías Estándar Robustas
Python:

requests (HTTP), datetime (fechas), os (sistema) vienen incluidos.

Java:

Colecciones, concurrencia, networking, etc., en la JDK.

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
