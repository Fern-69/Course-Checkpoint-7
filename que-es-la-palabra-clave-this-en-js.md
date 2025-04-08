---
cover: .gitbook/assets/this.png
coverY: 0
---

# ¿Qué es la palabra clave "this" en JS?

&#x20;La palabra clave `this` es una referencia al contexto en el que se ejecuta una función. Su valor cambia dependiendo de cómo y dónde se llama la función. `this` hace que los métodos sean flexibles y puedan trabajar con cualquier objeto que los contenga y acceder a las propiedades del objeto

Note

Es como un atajo para decir: "usa las propiedades de este objeto".Sin `this`, los métodos no podrían acceder a los datos del objeto de forma dinámica.

La función no sabe automáticamente que nombre pertenece al objeto:

```
     const persona = {
       nombre: "Isabel",
       saludar: function() {
         // ¿Cómo accedo al nombre "Isabel" desde aquí?
         console.log(`Hola, soy ${nombre}`); 
       }
     };
     persona.saludar();
     // Error: "nombre is not defined"
```

this actúa como un acceso directo al objeto _dueño_ (persona en este caso):

```
     const persona = {
       nombre: "Isabel",
       saludar: function() {
         console.log(`Hola, soy ${this.nombre}`);
       }
     };
     persona.saludar(); // `this` = persona
     ///Salida: "Hola, soy Isabel"
```

&#x20;     Sin `this` No hay forma de acceder a las propiedades del objeto desde sus métodos. Obligaría a escribir código redundante: persona.nombre en cada método.

Ejemplo de reutilización con this:

```
     const persona1 = {
       nombre: "Isabel",
       saludar: function() { console.log(`Hola, soy ${this.nombre}`); }
     };

     const persona2 = {
       nombre: "Ana",
       saludar: persona1.saludar // ¡Mismo método que persona1!
     };

     persona1.saludar(); // "Hola, soy Isabel"
     persona2.saludar(); // "Hola, soy Ana" (this cambia según quién llame al método)
```

Cuando usas `this` en una función sin dueño (que no es método de un objeto), **JavaScript** lo asigna automáticamente al objeto global del entorno donde se ejecuta:

```
     function mostrarThis() {
       console.log(this); // Apunta a `global`
     }

     mostrarThis();
```

*   En entorno de Navegadores: _"this = window"_ _"window"_ es el objeto global que representa la ventana del navegador, y contiene todas las APIs del navegador (document, console, setTimeout, etc.). Salida: Se ve el objeto Window con propiedades como:

    ```
        Window {
           document: document,
           alert: function() {...},
           localStorage: Storage {...},
           ...
         }
    ```



![](.gitbook/assets/image.png) [this - JavaScript | MDN - MDN Web Docs](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/this)
