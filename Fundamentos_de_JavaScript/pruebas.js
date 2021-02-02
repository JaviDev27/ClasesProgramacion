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
