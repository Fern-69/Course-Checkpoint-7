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

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En JavaScript, los datos se clasifican en dos categorías principales:

 1. **Primitivos:** Son datos <ins>Inmutables</ins>. Se accede a ellos por valor (7 tipos), y su tamaño en memoria es fijo. No tienen métodos o propiedades propios, ya que son valores simples almacenados directamente en la memoria.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

   |**Tipo**|	**Descripción**|	**Ejemplo**| **Código JS**|
   |--------|-----------------|-------------|--------------|
   |string|	Texto (cadena de caracteres)|	"Hola", 'Mundo'| let nombre = "Ana"; |
   |number	|Números (enteros, decimales, NaN, Infinity)|	42, 3.14, NaN| let edad = 25; | 
   |boolean|	Valor lógico (true o false)|	true, false |let esMayor = true; |
   |undefined|	Variable no asignada.|	let x; (x es undefined)|let direccion; 
   |null|	Valor nulo (asignado intencionalmente)|	let y = null;| let telefono = null;|
   |symbol|	Valor único e inmutable (ES6)|	Symbol("id");| let id = Symbol("id");1
   |bigint|	Números enteros muy grandes (ES2020)|	12345678901234567890n| let bigNum = 9007199254740991n;|
   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

 2. **No primitivos** (Objetos): Son <ins>Mutables</ins>. Se accede por referencia, y aunque tengan el mismo contenido, pueden tener múltiples referencias al mismo objeto. El tamaño que ocupan en meoria es dinámico porque puede variar (crecer o reducirse) durante la ejecución del programa, dependiendo de su contenido. Cada tipo de objeto tiene sus propios métodos y propiedades definidas.
    
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   |**Tipo**|	**Descripción**|	**Ejemplo**| **Código JS**|**Métodos**|
   |--------|----------------|-------------|--------------|------------|
   |object|	Colección de pares clave-valor|	{ nombre: "Ana", edad: 25 }| let persona = { nombre: "Carlos", edad: 30 };                                               |array|	Lista ordenada de valores|	[1, 2, 3]| let numeros = [1, 2, 3];|    
   |function|	Bloque de código reutilizable|	function sumar(a, b) { ... }|function saludar() { console.log("Hola"); }|
   |Date|	Fecha y hora|	new Date()| let hoy = new Date(); m|
   |RegExp|	Expresiones regulares|	/\d+/g| let regex = /abc/;|  
   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   > [!NOTE]
   >Aunque dos objetos tengan el mismo contenido, **JavaScript** los considera diferentes porque ocupan posiciones distintas en memoria)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Al utilizar el operador `typeof` generalmente devuelve el tipo de dato esperado, pero tiene algunos casos especiales que pueden resultar confusos:
- `typeof null` devuelve "object", aunque null es un dato primitvo. Esto es un error conocido desde la primera versión de JavaScript y se mantiene por compatibilidad.
- `typeof function() {}` devuelve "function".
- `typeof []` devuelve "object".
- `typeof {}` devuelve "object".
- `typeof NaN` devuelve "number".
- `typeof new Number()` devuelve "object", aunque envuelva un dato primitivo.
- `typeof new String()` devuelve "object", aunque envuelva un dato primitivo.
- `typeof undefined` devuelve "undefined"
   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

En resumen, **JavaScrip** tiene 7 tipos de datos ***Primitivos***, <ins>inmutables</ins>; y 5 tipos de ***objetos*** que son datos ***No Primitivos*** <ins>mutables</ins>.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

---------------------------------------------------------------------------------------------------------------------------------
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
## ¿Cuáles son las tres funciones de String en JS?
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Los ***Strings*** son datos primitivos, pero **JavaScript** temporalmente los convierte en objetos para usar estos métodos (autoboxing). Por eso parece que tienen métodos "incorporados". ***String*** tiene muchos métodos, pero los tres principales pueden ser:

1. .length (Propiedad, no método): Devuelve la cantidad de caracteres en el string.
   
         let texto = "Hola";
         console.log(texto.length); // Salida: 4
   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
2. .toUpperCase() / .toLowerCase(): Convierten el string a mayúsculas o minúsculas.

         let texto = "JavaScript";
         console.log(texto.toUpperCase()); // Salida: "JAVASCRIPT"
         console.log(texto.toLowerCase()); // Salida: "javascript"
         
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
3. .slice(inicio, fin): Extrae una parte del string.

         console.log("Hola Mundo".slice(0, 4)); // Salida: "Hola"
      
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     
Otras funciones que también son importantes y tienen mucho uso:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
4. .includes(substring) Verifica si un string contiene otro string (devuelve true o false).

         let frase = "Aprendo JavaScript";
         console.log(frase.includes("Java")); Salida: // true
         console.log(frase.includes("Python")); Salida: // false
   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      
5. .replace(viejo, nuevo): Reemplaza texto.
   
         console.log("Hola Mundo".replace("Mundo", "JavaScript")); // Salida: "Hola JavaScript"
      
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
6. .split(separador): Divide el string en un array.
   
         console.log("a,b,c".split(",")); // Salida: ["a", "b", "c"]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

---------------------------------------------------------------------------------------------------------------------------------
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
## ¿Qué es un condicional?
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

Un condicional en JavaScript es una estructura de control que permite ejecutar bloques de código solo si se cumple una condición específica. Es fundamental para tomar decisiones en el código, haciendo que este sea dinámico y responda a diferentes situaciones.

🔹 Tipos de condicionales en JavaScript
1. if (El más básico)
Evalúa una condición y ejecuta un bloque de código si es true:

javascript
Copy
if (edad >= 18) {
  console.log("Eres mayor de edad");
}
2. if...else (Alternativa)
Ejecuta un bloque si la condición es true y otro si es false:

javascript
Copy
if (edad >= 18) {
  console.log("Puedes votar");
} else {
  console.log("No puedes votar");
}
3. else if (Múltiples condiciones)
Encadena condiciones para evaluar más de dos opciones:

javascript
Copy
if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else {
  console.log("C");
}
4. switch (Para casos específicos)
Compara un valor con múltiples opciones y ejecuta el bloque correspondiente:

javascript
Copy
switch (diaSemana) {
  case "lunes":
    console.log("Inicio de semana");
    break;
  case "viernes":
    console.log("¡Fin de semana cerca!");
    break;
  default:
    console.log("Día normal");
}
5. Operador ternario (? :) (If-else en una línea)
Condicional abreviado para asignaciones o retornos rápidos:

javascript
Copy
let mensaje = (edad >= 18) ? "Mayor" : "Menor";
console.log(mensaje); // "Mayor" o "Menor"
🔍 ¿Cómo funcionan las condiciones?
Se evalúan como true (verdadero) o false (falso).

Usan comparadores como:

== (igualdad, sin tipo estricto).

=== (igualdad estricta, con tipo).

>, <, >=, <=, !=, !==.

También pueden usar operadores lógicos:

&& (AND): if (edad > 12 && edad < 20).

|| (OR): if (esAdmin || esSuperUsuario).

! (NOT): if (!estaInactivo).

💡 Ejemplo práctico:
javascript
Copy
let hora = 14;

if (hora < 12) {
  console.log("Buenos días");
} else if (hora < 19) {
  console.log("Buenas tardes"); // Esta se ejecuta
} else {
  console.log("Buenas noches");
}
⚠️ Errores comunes:
Olvidar {} en bloques de código (aunque sea una línea, es buena práctica usarlas).

**Confundir = (asignación) con == o === (comparación).

No usar break en switch, lo que causa que se ejecuten todos los casos siguientes.

🎯 ¿Por qué son importantes?
Los condicionales permiten:

Validar datos (ej: formularios).

Controlar flujos de programas (ej: menús de opciones).

Personalizar experiencias (ej: mostrar contenido según el usuario).
---------------------------------------------------------------------------------------------------------------------------------
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
## ¿Qué es un operador ternario?
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Operador Ternario en JavaScript
El operador ternario (? :) es una forma concisa de escribir un condicional if...else en una sola línea. Es especialmente útil para asignaciones rápidas o ejecuciones simples basadas en una condición.

🔹 Sintaxis Básica
javascript
Copy
condición ? expresiónSiVerdadero : expresiónSiFalso;
condición: Una expresión que se evalúa como true o false.

expresiónSiVerdadero: Se ejecuta si la condición es true.

expresiónSiFalso: Se ejecuta si la condición es false.

📌 Ejemplos Prácticos
Asignar un valor según una condición:

javascript
Copy
let edad = 20;
let mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";
console.log(mensaje); // "Mayor de edad"
Ejecutar funciones diferentes:

javascript
Copy
let esUsuarioPremium = true;
esUsuarioPremium ? mostrarContenidoPremium() : mostrarContenidoGratis();
Devolver valores en una arrow function:

javascript
Copy
const esPar = (num) => (num % 2 === 0 ? "Sí" : "No");
console.log(esPar(4)); // "Sí"
🔥 Ventajas
Código más corto y legible (para condiciones simples).

No requiere {} ni return en funciones de una línea.

Puede anidarse (aunque no es recomendable por legibilidad):

javascript
Copy
let nota = 85;
let resultado = nota >= 90 ? "A" : nota >= 80 ? "B" : "C";
console.log(resultado); // "B"
⚠️ Precauciones
No abuses del anidamiento (puede volverse difícil de leer):

javascript
Copy
// ❌ Difícil de entender
let x = a ? b : c ? d : e;
Usa if...else para lógica compleja (múltiples líneas o acciones).

💡 Comparación con if...else
Operador Ternario	if...else
let x = condición ? a : b;	if (condición) { x = a; } else { x = b; }
Ideal para asignaciones rápidas.	Ideal para bloques de código largos.
Retorna un valor directamente.	No retorna valores (a menos que uses return).
Ejemplo en React (JSX)
El ternario es muy usado en React para renderizado condicional:

jsx
Copy
<div>
  {usuarioLogueado ? <Perfil /> : <Login />}
</div>
Conclusión
El operador ternario es una herramienta poderosa para simplificar condiciones simples. Úsalo cuando necesites tomar decisiones rápidas y mantener tu código limpio. Para lógica más compleja, sigue usando if...else o switch.
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
