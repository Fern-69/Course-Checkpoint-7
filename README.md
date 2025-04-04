# COURSE_CHECKPOINT-7
&nbsp;

![Carátula de Portada](JavaScript-Logo.png)
&nbsp;

## ¿Qué diferencia a Javascript de cualquier otro lenguaje de programación?
&nbsp;
&nbsp;&nbsp;&nbsp;**JavaScript** es muy diferente a otros lenguajes de programación:
1. Es un lenguaje que se ejecuta directamente en el navegador, sin compilación previa (Interpretado):
   - **JavaScript** puede ejecutarse directamente en el navegador sin precompilación. Por ejemplo, al abrir un archivo HTML con código **JavaScript** en un navegador, este lo interpreta y ejecuta línea por línea.
   - ***Java*** es un lenguaje compilado y su código fuente debe compilarse en código de bytes antes de su ejecución.
     
2. Es Dinámico y flexible. No requiere declarar tipos de variables:
   - En **JavaScript** (lenguajes de tipado dinámico) No se especifica el tipo de variable, y se puede reasignar. Por ejemplo,
 
         let x = 5;      // x es number
     
         x = "hola";     // Ahora x es string (¡sin error!)
     
   - En otros lenguajes (lenguajes de tipado estático), se debe declarar el tipo, y no se puede cambiar. Por ejemplo,
 
         int x = 5;      // x siempre será int   
     
         x = "hola";     // ¡Error de compilación!
     
3. Tiene un alcance (<ins>Scope:</ins>) diferente a otros lenguajes, ya que combina alcance de función (`var`) y bloque (`let`/`const`).
   
> [!NOTE]
> <ins>Function Scope:</ins>! (ámbito de función) es el espacio donde una variable declarada con `var` dentro de una función solo es accesible dentro de esa función (y no fuera).

   &nbsp;&nbsp;&nbsp;Alcance de Función (<ins>Function Scope:</ins>)

            function ejemplo() {
   
               if (true) {
   
               var x = 10; // ¡Alcance de FUNCIÓN!`
   
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

> [!NOTE]
> **JavaScript** fue creado en 1995 por Brendan Eich en solo 10 días, y var fue la única forma de declarar variables hasta ES6 (2015). Su diseño inicial tenía varias limitaciones que causaban bugs comunes. En 2015, ES6 introdujo `let` y `const`, que son las alternativas modernas y seguras para corregir estos problemas.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En el caso de variables en bucles, con **JS** `var` se comparte en iteraciones, auqnue podría haber posibles problemas con <ins>closures:</ins>, se resuelve con `let`; similar en ***Python/Ruby***; Pero en ***C/Java/C#***, cada iteración tiene su propia variable.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

> [!NOTE]
> <ins>closures:</ins>! *Función que recuerda su entorno original, incluso cuando se ejecuta fuera de ese entorno*

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En **JS** `var` se "eleva" (<ins>hoisting:</ins>), `let/const` también pero no se inicializan. En el caso de ***C/Java/C#*** no aplica, y se produce un error si usas antes de declarar.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

> [!NOTE]
><ins>hoisting:</ins> *comportamiento donde las declaraciones de variables y funciones se mueven al inicio de su ámbito **(scope)** antes de que se ejecute el código*
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

3. Programación asincrónica: **JS** permite ejecutar tareas simultáneamente sin bloquear el hilo principal, lo que la hace ideal para gestionar operaciones que consumen mucho tiempo, como solicitudes de red o la lectura de archivos. Dos operaciones asíncronas comunes en **JS** son las devoluciones de llamadas y las promesas.
   
   Frente a otros lenguajes:
   
   |JavaScript|	Otros Lenguajes|
   |----------|------------------|
   |Un solo hilo|	Múltiples hilos|
   |Nunca se bloquea: siempre está haciendo algo|	Pueden bloquearse (esperando)|
   |Más lento en tareas pesadas (ej: cálculos grandes)|	Más rápidos en tareas pesadas (si usan bien los hilos)|
   |Ideal para tareas de espera (APIs, archivos)|	Mejor para procesamiento en paralelo (videos, juegos)|

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

4. Programación síncrona: Las tareas se ejecutan una tras otra, en orden. Si una operación tarda (como leer un archivo o hacer una consulta a una ***API***), el programa se detiene hasta que termine.
   
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**JS** es síncrono por defecto, pero la gran diferencia frente a otros lenguajes es que no tiene operaciones de Entrada/Salida (Input/Output) síncronas por defecto. No bloquean el hilo principal mientras espera una respuesta y el código sigue ejecutándose (por ejemplo, una ***API***). En otros lenguajes, si no usan hilos o técnicas async, el programa se congela hasta que la operación termine.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

5. Compatibilidad y evolución: **JS** es un Código escrito hace 20 años que aún funciona en navegadores modernos. <ins>ECMAScript</ins> se actualiza casi anualmente, añadiendo mejoras como let/const, arrow functions, módulos, etc., siendo la implemetación más famosa. Esto tiene la ventaja de que no hay que reescribir todo cada año. Aunque el Código antiguo puede tener vulnerabilidades o malas prácticas.

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Otros lenguajes (***Python, Java, C#***) son lenguajes + implementaciones oficiales, es decir, no separan "estándar" de "implementación" tan claramente. Suelen evolucionar más lento y con control centralizado.

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**JS** está diseñado para el navegador, por eso su modelo asíncrono (Event Loop) es único, y se integra a la perfección con ***HTML*** y ***CSS*** (añade comportamiento dinámico e interactividad a las páginas web). Los otros lenguajes están pensados para múltiples entornos, y tiene acceso total al sistema. Pueden interactuar directamente con el hardware y el SO (Leer/escribir archivos, abrir sockets de red, controlar dispositivos: cámara, USB, GPU); mientras que **JS** no puede acceder directamente al sistema operativo dependiendo de ****APIs*** del navegador.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> [!NOTE]
><ins>ECMAScript</ins> (ES) es el estándar en el que se basa JavaScript. Es como las "reglas oficiales" que definen cómo debe funcionar el lenguaje.
> ***ECMAScript*** = estándar (las reglas escritas).**JavaScript** = implementación práctica.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

> [!NOTE]
>El <ins>event loop</ins> es un mecanismo de **JavaScript** que ejecuta tareas asíncronas de forma no bloqueante. Funciona en un ciclo infinito, esperando por una tarea, ejecutando la tarea requerida y volviendo a esperar por una nueva tarea (Gestiona la cola de tareas, determina el orden de ejecución, sincroniza la ejecución de tareas, revisa la cola de tareas y ejecutar cada una de ellas en orden)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

   Versiones más importantes de ECMAScript:

   |Año|	Versión|	Novedades Principales|
   |---|--------|----------------------|
   |2009|	ES5|	"use strict", JSON.parse, Array.map/filter|
   |2015|	ES61 (ES2015)|	let/const, arrow functions, promesas, clases, template strings|
   |2016|	ES7|	Array.includes(), operador ** (exponenciación)|
   |2017|	ES8|	async/await, Object.values()/entries()|
   |2020|	ES11|	Optional Chaining (?.), Nullish Coalescing (??)|
   |2023|	ES14|	Array.findLast(), Hashbang Grammar|

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

6. **JavaScript** cuenta con un ecosistema muy rico (<ins>NMP</ins>) de bibliotecas y herramientas de terceros que amplían sus capacidades, optimizan el desarrollo y lo hacen que sea más eficientete. Las bibliiotecas están compuestas por paquetes pequeños y especializados, de instalación rápida:
   
   `npm install jQuery  # Instala una librería que permite agregar interactividad y efectos visuales en un sitio web.`
   
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Las biblilotecas están muy especializadas por lo que solo importas lo que se necesita (gran flexibilidad), aunque esto hace que se dependa de muchas librerías. Sus actualizaciones frecuentes pueden rompen la compatibilidad, y hay un gran número de ellos abandonados porque el 70% de npm depende de librerías mantenidas por una sola persona.
> [!NOTE]
><ins>NMP</ins> ((Node Package Manager)) es es el gestor de paquetes predeterminado para **JavaScript**. Es la herramienta que permite: instalar librerías externas, compartir el código, Gestionar dependencias (versiones, actualizaciones, etc.).

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Otros lenguajes, tienen paquetes más grandes y completos, con sistemas más jerarquizados e incluidos en otros programas. estos paquetes tienen soporte a largo plazo, y las empresas son las que mantienen las librerías clave (Oracle, Red hat). Por esto, pueden ser mejores para realizar proyectos grandes y estables, con soporte empresarial.\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En definitiva, **JavaScript** se ejecuta directamente en el navegador web en tiempo de ejecución, lo que le permite probar e iterar el código rápidamente. Es dinámico, con       gran flexibilidad y orientado a eventos. No requiere instalación ni plugins adicionales y maneja un gran número de librerías especializadas. Es un lenguaje compatible con sus versiones antiguas y que se sigue    actualizando casi anualmente.

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
