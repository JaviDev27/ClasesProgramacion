/*
13/4
13-4 =9   1
9 - 4= 5  1
5 -4 = 1 1
1-4= -3 0 caso base


*/

function dividendoEntera(dividendo, divisor) {
  if (dividendo < divisor) {
    return 0;
  }

  return 1 + dividendoEntera(dividendo - divisor, divisor);
}

/* Factorial 
6 = 6*5*4*3*2*1 =720
12 = 12*11*10*9*8*7 ¡6
*/

function factorial(n) {
  //verifica si hay cache o sino lo crea
  if (!this.cache) {
    this.cache = {};
  }

  debugger;
  //si ya existe una cache
  if (this.cache[n]) {
    return this.cache[n];
  }
  if (n === 1) {
    return 1;
  }

  this.cache[n] = n * factorial(n - 1);
  debugger;
  return this.cache[n];

  ///6 * factorial(5)
}

function firstDuplicate(a) {
  let count = 0;
  let i, j;
  for (i = 0; i <= a.length; i++) {
    for (j = 0; j <= a.length; j++) {
      if (a[i] === a[j]) {
        count++;
      }
      console.log(`${a[i]}  ${a[j]} ${count}`);
    }
  }
  return count;
}
