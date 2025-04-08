---
cover: .gitbook/assets/Tipo datos JS.png
coverY: 0
---

# ¿Cuáles son algunos tipos de datos JS?

En JavaScript, los datos se clasifican en dos categorías principales:

1. **Primitivos:** Son datos Inmutables. Se accede a ellos por valor (7 tipos), y su tamaño en memoria es fijo. No tienen métodos o propiedades propios, ya que son valores simples almacenados directamente en la memoria.

| **Tipo**     | **Descripción**                             | **Ejemplo**             | **Código JS**                   |
| ------------ | ------------------------------------------- | ----------------------- | ------------------------------- |
| string  📝   | Texto (cadena de caracteres)                | "Hola", 'Mundo'         | let nombre = "Ana";             |
| number  🔢   | Números (enteros, decimales, NaN, Infinity) | 42, 3.14, NaN           | let edad = 25;                  |
| boolean  ✔️❌ | Valor lógico (true o false)                 | true, false             | let esMayor = true;             |
| undefined  ❓ | Variable no asignada.                       | let x; (x es undefined) | let direccion;                  |
| null  🚫     | Valor nulo (asignado intencionalmente)      | let y = null;           | let telefono = null;            |
| symbol  ✨    | Valor único e inmutable (ES6)               | Symbol("id");           | let id = Symbol("id");1         |
| bigint   🧮  | Números enteros muy grandes (ES2020)        | 12345678901234567890n   | let bigNum = 9007199254740991n; |

2. **No primitivos** (Objetos): Son Mutables. Se accede por referencia, y aunque tengan el mismo contenido, pueden tener múltiples referencias al mismo objeto. El tamaño que ocupan en meoria es dinámico porque puede variar (crecer o reducirse) durante la ejecución del programa, dependiendo de su contenido. Cada tipo de objeto tiene sus propios métodos y propiedades definidas.

<table data-header-hidden><thead><tr><th width="123.20001220703125"></th><th></th><th width="156.2000732421875"></th><th width="196.7999267578125"></th><th width="169.5999755859375"></th></tr></thead><tbody><tr><td><strong>Tipo</strong></td><td><strong>Descripción</strong></td><td><strong>Ejemplo</strong></td><td><strong>Código JS</strong></td><td><strong>Métodos</strong></td></tr><tr><td>o<strong>bject</strong>   🗃️</td><td>Colección de pares clave-valor</td><td>let persona = { nombre: "Ana", edad: 30 };</td><td>let persona = { nombre: "Ana", edad: 30 };</td><td><p><code>Object.keys()</code>, <code>Object.values()</code></p><p><code>hasOwnProperty()</code>, <code>JSON.stringify()</code></p></td></tr><tr><td>array   📋</td><td>Lista ordenada de valores</td><td>[1, 2, 3]</td><td>let numeros = [1, 2, 3];</td><td><code>push()</code>, <code>pop()</code>, <code>shift()</code>, <code>unshift()</code>, <code>map()</code>, <code>filter()</code>, <code>reduce()</code>, <code>slice()</code></td></tr><tr><td>function   🔧</td><td>Bloque de código reutilizable</td><td>function sumar(a, b) { ... }</td><td>function saludar() { console.log("Hola"); }</td><td><code>call()</code>, <code>apply()</code>, <code>bind()</code>, <code>toString()</code></td></tr><tr><td>Date  📅</td><td>Fecha y hora</td><td>new Date()</td><td>let hoy = new Date(); m</td><td><code>getDate()</code>, <code>getMonth()</code>, <code>getFullYear()</code>, <code>getTime()</code>, <code>toISOString()</code>, <code>setHours()</code></td></tr><tr><td>RegExp  🧩</td><td>Expresiones regulares</td><td>/\d+/g</td><td>let regex = /abc/;</td><td><code>test()</code>, <code>exec()</code>, <code>toString()</code>, <code>compile()</code></td></tr></tbody></table>

Note

Aunque dos objetos tengan el mismo contenido, **JavaScript** los considera diferentes porque ocupan posiciones distintas en memoria)      &#x20;

&#x20;     Al utilizar el operador `typeof` generalmente devuelve el tipo de dato esperado, pero tiene algunos casos especiales que pueden resultar confusos:

* `typeof null` devuelve "object", aunque null es un dato primitvo. Esto es un error conocido desde la primera versión de JavaScript y se mantiene por compatibilidad.
* `typeof function() {}` devuelve "function".
* `typeof []` devuelve "object".
* `typeof {}` devuelve "object".
* `typeof NaN` devuelve "number".
* `typeof new Number()` devuelve "object", aunque envuelva un dato primitivo.
* `typeof new String()` devuelve "object", aunque envuelva un dato primitivo.
* `typeof undefined` devuelve "undefined"

En resumen, **JavaScrip** tiene 7 tipos de datos _**Primitivos**_, inmutables; y 5 tipos de _**objetos**_ que son datos _**No Primitivos**_ mutables.



Puedes encontrar otros ejemplos sobre los datos de **JavaScript** en: [https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Data\_structures](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Data_structures)
