---
cover: .gitbook/assets/functions string.jpg
coverY: 0
---

# ¿Cuáles son las tres funciones de String en JS?

Los _**Strings**_ son datos primitivos, pero **JavaScript** temporalmente los convierte en objetos para usar estos métodos (autoboxing). Por eso parece que tienen métodos "incorporados".&#x20;

_**String**_ tiene muchos métodos, pero los tres principales pueden ser:

1.  .length (Propiedad, no método): Devuelve la cantidad de caracteres en el string.

    ```
      let texto = "Hola";
      console.log(texto.length); // Salida: 4
    ```

&#x20;      2\. .toUpperCase() / .toLowerCase(): Convierten el string a mayúsculas o minúsculas.

```
     let texto = "JavaScript";
     console.log(texto.toUpperCase()); // Salida: "JAVASCRIPT"
     console.log(texto.toLowerCase()); // Salida: "javascript"
```

&#x20;      3\. .slice(inicio, fin): Extrae una parte del string.

```
     console.log("Hola Mundo".slice(0, 4)); // Salida: "Hola"
```

&#x20;     \
Otras funciones que también son importantes y tienen mucho uso:

&#x20;      4\. .includes(substring) Verifica si un string contiene otro string (devuelve true o false).

```
     let frase = "Aprendo JavaScript";
     console.log(frase.includes("Java")); Salida: // true
     console.log(frase.includes("Python")); Salida: // false
```

&#x20;     \
5\. .replace(viejo, nuevo): Reemplaza texto.

```
     console.log("Hola Mundo".replace("Mundo", "JavaScript")); // Salida: "Hola JavaScript"
```

&#x20;      6\. .split(separador): Divide el string en un array.

```
     console.log("a,b,c".split(",")); // Salida: ["a", "b", "c"]
```

<figure><img src=".gitbook/assets/String todo2.png" alt=""><figcaption></figcaption></figure>
