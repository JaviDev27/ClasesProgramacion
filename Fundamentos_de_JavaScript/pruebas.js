function maskify(cc) {
  const mask = "#";
  if (cc.length <= 1) {
    return cc;
  }

  if (cc.length >= 5) {
    return `${mask.repeat(cc.length - 4)}${cc.substring(cc.length - 4)}`;
  }
}

console.log(`${maskify(`1234567890`)}`);

function arrayDiff(a, b) {
  return a.filter((a) => !b.includes(a));
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2]));

const capitalize = (text) => {
  //debugger;
  var newText = [];
  newText = text.split(" ");
  var textfinal = "";

  for (let index = 0; index < newText.length; index++) {
    newText[index] = `${newText[index].charAt(0).toUpperCase()}${newText[
      index
    ].slice(1)} `;

    textfinal += newText[index];
  }

  return textfinal;
};

var str = "How can mirrors be real if our eyes aren't real";
console.log(`${capitalize(str)}`);

////////////////////

//[1,1,1],10),[1,1,1,3,5,9,17,31,57,105]

function tribonacci(signature, n) {
  var arrayTreeData = [];

  if (n > 1) {
    for (let index = 0; index < n - 3; index++) {
      arrayTreeData = signature.slice(index, signature.length);
      signature.push(
        arrayTreeData.reduce((sum, data) => {
          return sum + data;
        })
      );
    }
    return signature;
  }

  if (n === 0) {
    return [];
  }

  if (n == 1) {
    return signature.reduce((sum, data) => {
      return sum + data;
    });
  }
}

console.log(`${tribonacci([1, 1, 1], 10)}`);
console.log(`${tribonacci([1, 1, 1], 1)}`);

const suma = (sum, data) => {
  return sum + data;
};

var a = [1, 1, 1];
var b = a.reduce(suma, 0);

console.log(b);
