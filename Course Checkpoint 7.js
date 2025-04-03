
function initialArguments(a, b, c, d) {
  
    if (arguments.length !== 4) {
      console.log("Solo puedes poner 4 números");
      return;
    }
    
    const firstSum = a + b;
    const secondSum = c + d;
    const result = firstSum * secondSum;
    
    if (result > 50) {
      console.log("¡El número es mayor que 50!");
    } else {
      console.log("¡El número es menor que 50!");
    }
    
    console.log("El resultado es: " + result);
  }
  
initialArguments(3, 4, 5, 2);
initialArguments(1, 6, 3, 10);
initialArguments(2, 3, 4, 5, 7);

