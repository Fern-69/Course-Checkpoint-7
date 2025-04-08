---
cover: .gitbook/assets/JS vs otros.png
coverY: 0
---

# ¿Qué diferencia a Javascript de cualquier otro lenguaje de programación?

&#x20;**JavaScript** es muy diferente a otros lenguajes de programación:

1. Es un lenguaje que se ejecuta directamente en el navegador, sin compilación previa (Interpretado):
   * **JavaScript** puede ejecutarse directamente en el navegador sin precompilación. Por ejemplo, al abrir un archivo HTML con código **JavaScript** en un navegador, este lo interpreta y ejecuta línea por línea.
   * _**Java**_ es un lenguaje compilado y su código fuente debe compilarse en código de bytes antes de su ejecución.
2. Es Dinámico y flexible. No requiere declarar tipos de variables:
   *   En **JavaScript** (lenguajes de tipado dinámico) No se especifica el tipo de variable, y se puede reasignar. Por ejemplo,

       ```
       let x = 5;      // x es number

       x = "hola";     // Ahora x es string (¡sin error!)
       ```
   *   En otros lenguajes (lenguajes de tipado estático), se debe declarar el tipo, y no se puede cambiar. Por ejemplo,

       ```
       int x = 5;      // x siempre será int   

       x = "hola";     // ¡Error de compilación!
       ```
3. Tiene un alcance (Scope:) diferente a otros lenguajes, ya que combina alcance de función (`var`) y bloque (`let`/`const`).

Note

Function Scope:! (ámbito de función) es el espacio donde una variable declarada con `var` dentro de una función solo es accesible dentro de esa función (y no fuera).

&#x20;  Alcance de Función (Function Scope:)

```
        function ejemplo() {

           if (true) {

           var x = 10; // ¡Alcance de FUNCIÓN!`

        }

        console.log(x); // 10 (accesible fuera del bloque if)
```

&#x20;  Alcance de Bloque (Block Scope)

```
        function ejemplo() {

           if (true) {

           let y = 20;   // Alcance de BLOQUE

           const z = 30; // Alcance de BLOQUE

         }

         console.log(y); // ¡Error! y no está definida aquí   

         console.log(z); // ¡Error! z no está definida aquí

         }
```

&#x20;    Otros lenguajes suelen ser más consistentes (todo bloque o todo función). En el caso de _**Python/Ruby**_ se parecen a **JavScript** con `let`, pero sin el problema histórico de `var`. En el caso de _**C/Java/C#**_, siempre bloque (las variables viven dentro de `{}`)

Note

**JavaScript** fue creado en 1995 por Brendan Eich en solo 10 días, y var fue la única forma de declarar variables hasta ES6 (2015). Su diseño inicial tenía varias limitaciones que causaban bugs comunes. En 2015, ES6 introdujo `let` y `const`, que son las alternativas modernas y seguras para corregir estos problemas.

&#x20;    En el caso de variables en bucles, con **JS** `var` se comparte en iteraciones, auqnue podría haber posibles problemas con closures:, se resuelve con `let`; similar en _**Python/Ruby**_; Pero en _**C/Java/C#**_, cada iteración tiene su propia variable.     &#x20;

Note

closures:! _Función que recuerda su entorno original, incluso cuando se ejecuta fuera de ese entorno_

&#x20;    En **JS** `var` se "eleva" (hoisting:), `let/const` también pero no se inicializan. En el caso de _**C/Java/C#**_ no aplica, y se produce un error si usas antes de declarar.     &#x20;

Note

hoisting: _comportamiento donde las declaraciones de variables y funciones se mueven al inicio de su ámbito **(scope)** antes de que se ejecute el código_     &#x20;

3.  Programación asincrónica: **JS** permite ejecutar tareas simultáneamente sin bloquear el hilo principal, lo que la hace ideal para gestionar operaciones que consumen mucho tiempo, como solicitudes de red o la lectura de archivos. Dos operaciones asíncronas comunes en **JS** son las devoluciones de llamadas y las promesas.

    Frente a otros lenguajes:

    | JavaScript                                         | Otros Lenguajes                                        |
    | -------------------------------------------------- | ------------------------------------------------------ |
    | Un solo hilo                                       | Múltiples hilos                                        |
    | Nunca se bloquea: siempre está haciendo algo       | Pueden bloquearse (esperando)                          |
    | Más lento en tareas pesadas (ej: cálculos grandes) | Más rápidos en tareas pesadas (si usan bien los hilos) |
    | Ideal para tareas de espera (APIs, archivos)       | Mejor para procesamiento en paralelo (videos, juegos)  |
4.  Programación síncrona: Las tareas se ejecutan una tras otra, en orden. Si una operación tarda (como leer un archivo o hacer una consulta a una _**API**_), el programa se detiene hasta que termine.

    &#x20;    **JS** es síncrono por defecto, pero la gran diferencia frente a otros lenguajes es que no tiene operaciones de Entrada/Salida (Input/Output) síncronas por defecto. No bloquean el hilo principal mientras espera una respuesta y el código sigue ejecutándose (por ejemplo, una _**API**_). En otros lenguajes, si no usan hilos o técnicas async, el programa se congela hasta que la operación termine.
5.  Compatibilidad y evolución: **JS** es un Código escrito hace 20 años que aún funciona en navegadores modernos. ECMAScript se actualiza casi anualmente, añadiendo mejoras como let/const, arrow functions, módulos, etc., siendo la implemetación más famosa. Esto tiene la ventaja de que no hay que reescribir todo cada año. Aunque el Código antiguo puede tener vulnerabilidades o malas prácticas.

    &#x20;    Otros lenguajes (_**Python, Java, C#**_) son lenguajes + implementaciones oficiales, es decir, no separan "estándar" de "implementación" tan claramente. Suelen evolucionar más lento y con control centralizado.

    &#x20;    **JS** está diseñado para el navegador, por eso su modelo asíncrono (Event Loop) es único, y se integra a la perfección con _**HTML**_ y _**CSS**_ (añade comportamiento dinámico e interactividad a las páginas web). Los otros lenguajes están pensados para múltiples entornos, y tiene acceso total al sistema. Pueden interactuar directamente con el hardware y el SO (Leer/escribir archivos, abrir sockets de red, controlar dispositivos: cámara, USB, GPU); mientras que **JS** no puede acceder directamente al sistema operativo dependiendo de \*_**APIs**_ del navegador.     &#x20;

Note

ECMAScript (ES) es el estándar en el que se basa JavaScript. Es como las "reglas oficiales" que definen cómo debe funcionar el lenguaje. _**ECMAScript**_ = estándar (las reglas escritas).**JavaScript** = implementación práctica.     &#x20;

Note

El event loop es un mecanismo de **JavaScript** que ejecuta tareas asíncronas de forma no bloqueante. Funciona en un ciclo infinito, esperando por una tarea, ejecutando la tarea requerida y volviendo a esperar por una nueva tarea (Gestiona la cola de tareas, determina el orden de ejecución, sincroniza la ejecución de tareas, revisa la cola de tareas y ejecutar cada una de ellas en orden)

Versiones más importantes de ECMAScript:

| Año  | Versión       | Novedades Principales                                          |
| ---- | ------------- | -------------------------------------------------------------- |
| 2009 | ES5           | "use strict", JSON.parse, Array.map/filter                     |
| 2015 | ES61 (ES2015) | let/const, arrow functions, promesas, clases, template strings |
| 2016 | ES7           | Array.includes(), operador \*\* (exponenciación)               |
| 2017 | ES8           | async/await, Object.values()/entries()                         |
| 2020 | ES11          | Optional Chaining (?.), Nullish Coalescing (??)                |
| 2023 | ES14          | Array.findLast(), Hashbang Grammar                             |

6.  **JavaScript** cuenta con un ecosistema muy rico (NMP) de bibliotecas y herramientas de terceros que amplían sus capacidades, optimizan el desarrollo y lo hacen que sea más eficientete. Las bibliiotecas están compuestas por paquetes pequeños y especializados, de instalación rápida:

    `npm install jQuery # Instala una librería que permite agregar interactividad y efectos visuales en un sitio web.`

    &#x20;    Las biblilotecas están muy especializadas por lo que solo importas lo que se necesita (gran flexibilidad), aunque esto hace que se dependa de muchas librerías. Sus actualizaciones frecuentes pueden rompen la compatibilidad, y hay un gran número de ellos abandonados porque el 70% de npm depende de librerías mantenidas por una sola persona.

Note

NMP ((Node Package Manager)) es es el gestor de paquetes predeterminado para **JavaScript**. Es la herramienta que permite: instalar librerías externas, compartir el código, Gestionar dependencias (versiones, actualizaciones, etc.).

&#x20;     Otros lenguajes, tienen paquetes más grandes y completos, con sistemas más jerarquizados e incluidos en otros programas. estos paquetes tienen soporte a largo plazo, y las empresas son las que mantienen las librerías clave (Oracle, Red hat). Por esto, pueden ser mejores para realizar proyectos grandes y estables, con soporte empresarial.\
&#x20;   &#x20;

&#x20;     En definitiva, **JavaScript** se ejecuta directamente en el navegador web en tiempo de ejecución, lo que le permite probar e iterar el código rápidamente. Es dinámico, con gran flexibilidad y orientado a eventos. No requiere instalación ni plugins adicionales y maneja un gran número de librerías especializadas. Es un lenguaje compatible con sus versiones antiguas y que se sigue actualizando casi anualmente.
