function binaryToString(binaryBlob) {
  let resStr = "";

  for (let i = 0; i < binaryBlob.length; i += 8) {
    let byte = binaryBlob.slice(i, i + 8);
    let base10 = parseInt(byte, 2);
    let char = String.fromCharCode(base10);

    resStr += char;
  };

  return resStr;
};

/* Comment in the code below to run local tests */
// console.log(binaryToString('010000010100001001000011')); // 'ABC'
// console.log(binaryToString('001101100011011100111000')); // '678'


module.exports = binaryToString;