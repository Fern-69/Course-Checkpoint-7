---
cover: .gitbook/assets/operador-ternario-php.jpg
coverY: 0
---

# ¿Qué es un operador ternario?

El _**operador Ternario**_ en **JavaScript** es una forma concisa de escribir un condicional `if/else` en una sola línea. Es especialmente útil para asignaciones rápidas o ejecuciones simples basadas en una condición.

Su sintáxis básica es:

```
  condición ? expresiónSiVerdadero : expresiónSiFalso;

  //condición: Una expresión que se evalúa como `true` o `false`.
  //expresiónSiVerdadero: Se ejecuta si la condición es `true`.
  //expresiónSiFalso: Se ejecuta si la condición es `false`.
```

Esto equivale a la estructura condicional:

```
  if (condición) {
    expresiónSiVerdadero;
  } else {
    expresiónSiFalso;
  }
```

Ejemplos de operador ternario vs condicionales tradicionales:

1.  Equivalente a `if` simple:

    ```
      resultado = condicion ? "verdadero" : resultado;

      //Sin operador ternario:

    if (condicion) {
        resultado = "verdadero";
      }
    ```

Warning

Si la condición es falsa, mantiene el valor previo de `resultado`. El Operador Ternario siempre debe retornar un valor (no sirve para ejecutar funciones sin retorno).

2.  Equivalente a `if/else`:

    ```
      mensaje = condicion ? "éxito" : "error";

      //Sin operador ternario:

      if (condicion) {
        mensaje = "éxito";
      } else {
        mensaje = "error";
      }
    ```
3.  Equivalente a `if/else...if/else` (múltiples condiciones): Con ternario anidado.

    ```
     nota = 
        puntuacion >= 90 ? "A" :
        puntuacion >= 80 ? "B" :
        "C";

     //Sin operador ternario:


     if (puntuacion >= 90) {
        nota = "A";
     } else if (puntuacion >= 80) {
        nota = "B";
     } else {
        nota = "C";
     }
    ```
4.  Equivalente a `switch`: Con ternario anidado.

    ```
     nombreDia = 
       dia === 1 ? "Lunes" :
       dia === 2 ? "Martes" :
       "Desconocido";

     //Sin operador ternario:

     switch (dia) {
        case 1: nombreDia = "Lunes"; break;
        case 2: nombreDia = "Martes"; break;
        default: nombreDia = "Desconocido";
     }
    ```

Tip

Los ternarios anidados pueden volverse difíciles de leer. Si hay muchas condiciones, es preferible usar if/else o switch para mayor claridad.

&#x20;     El Operador Ternario es una herramienta poderosa para simplificar condiciones simples, ofrece la escritura de código más corto y legible (No requiere {} ni return en funciones de una línea). Es preferible usarlo cuando necesitemos tomar decisiones rápidas y mantener el código limpio. Para lógica más compleja, es mejor seguir usando `if/else` o `switc`
