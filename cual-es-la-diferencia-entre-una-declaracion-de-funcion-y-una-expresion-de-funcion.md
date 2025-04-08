---
cover: .gitbook/assets/función1.jpg
coverY: 0
---

# ¿Cuál es la diferencia entre una declaración de función y una expresión de función?

&#x20;La Declaración de Función es la función en sí misma ,escrita directamente con la palabra clave `function`, y no está asignada a ninguna variable. Mientras, la Expresión de Función es cuando la función se declara dentro de la variable.

Declaración de Función:

```
     function sumar(a, b) {
       return a + b;
     }
```

Exprexión de Función:

```
     const sumar = function(a, b) {
       return a + b;
     };
```

Podemos resumirlo como:

* Declaración: Escribir la función en sí. _function sumar(a, b)_
* Expresión: Escribir la función dentro de una variable. _const sumar = function(a, b)_
