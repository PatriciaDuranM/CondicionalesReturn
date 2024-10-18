/* 1. Crea una función que reciba un nombre y una edad e imprima por consola "Hola [nombre], eres mayor/menor de edad" en función de la edad que le pasemos. */
function age(name, age) {
  if (age > 18) {
    return "Hola " + name + " eres mayor de edad";
  }
  {
    return "Hola " + name + " eres menor de edad";
  }
}

const result = age("Guissepe", 60);
console.log(result);

/* 2. Crea una función que reciba 2 números distintos e imprima por consola cual es el mayor. */

function highnumber(numberA, numberB) {
  if (numberA > numberB) {
    return numberA;
  }
  {
    return numberB;
  }
}

const resultado = highnumber(5, 60);
console.log(resultado);

/* 3.Crea una función que reciba un número e imprima por consola si es un número negativo, si es positivo o si es cero.*/

function posneg(numberA) {
  if (numberA === 0) {
    return numberA + " es igual a cero";
  } else if (numberA > 0) {
    return numberA + " es positivo";
  }
  {
    return numberA + " es negativo";
  }
}

const resultposneg = posneg(-50);
console.log(resultposneg);

/* 4.Crea una función que reciba 3 notas, si la media está entre 0 y 5 mostrará el mensaje "Suspenso", si la media está entre 5 y 8 mostrará "Aprobado" y si la media es 8 o más dirá "Matrícula de honor" */

function media(gradeA, gradeB, gradeC) {
  if ((gradeA + gradeB + gradeC) / 3 <= 4) {
    return "Estas suspenso";
  } else if (
    (gradeA + gradeB + gradeC) / 3 >= 5 &&
    (gradeA + gradeB + gradeC) / 3 <= 8
  ) {
    return "Estas aprobado";
  }
  {
    return "Tienes Matrícula de honor";
  }
}

const resultmedia = media(2, 4, 3);
console.log(resultmedia);

/* 5.Crea una función que reciba tres números y devuelva el mayor de ellos.*/

function threenumber(numberA, numberB, numberC) {
  if (numberA > numberB && numberA > numberC) {
    return numberA;
  } else if (numberB > numberA && numberB > numberC) {
    return numberB;
  }
  return numberC;
}

const resulthreenumber = threenumber(20, 10, 2);
console.log(resulthreenumber);

/* 6.Crea una función que reciba un número entero y devuelva "Es divisible por 3" si es divisible por 3, "Es divisible por 5" si es divisible por 5, y "Es divisible por 3 y por 5" si es divisible por ambos. Si no es divisible por ninguno, devuelve el número.

function division(number) {
  if (number % 3 === 0 && number % 5 !== 0) {
    console.log(number + " es divisible por 3");
  } else if (number % 5 === 0 && number % 3 !== 0) {
    console.log(number + " es divisible por 5");
  } else if (number % 5 === 0 && number % 3 === 0) {
    console.log(number + " es divisible por 3 y por 5");
  } else {
    console.log(number);
  }
}
*/
function division(number) {
  if (number % 3 === 0 && number % 5 !== 0) {
    return number + " es divisible por 3";
  } else if (number % 5 === 0 && number % 3 !== 0) {
    return number + " es divisible por 5";
  } else if (number % 5 === 0 && number % 3 === 0) {
    return number + " es divisible por 3 y por 5";
  }
  return number;
}

const resultdivision = division(14);
console.log(resultdivision);

/* 7.Crea una función que reciba un número entero y determine si es par o impar. Imprime por consola "Es un número par" o "Es un número impar" en función del resultado.

function par(number) {
  if (number % 2 === 0) {
    console.log(number + " Es un número par");
  } else {
    console.log(number + " Es un número impar");
  }
}
*/

par(2);
par(33);

/* 8.Crea una función que reciba un año y determine si es un año bisiesto. Un año es bisiesto si es divisible por 4, pero no es divisible por 100, a menos que también sea divisible por 400. Imprime por consola "Es un año bisiesto" o "No es un año bisiesto" en función del resultado
 

function año(number) {
  if ((number % 4 === 0 && number % 100 !== 0) || number % 400 === 0) {
    console.log("El año " + number + " es un año bisiesto");
  } else {
    console.log("El año " + number + " no es un año bisiesto");
  }
}
*/
año(2012);
año(100);
año(400);
año(2024);
