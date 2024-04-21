var isBinaryInput = false;

function convert() {
  var input = document.getElementById('textInput').value.trim();
  var output = '';

  if (isBinaryInput) {
    var binaryArray = input.split(' ');
    for (var i = 0; i < binaryArray.length; i++) {
      var binaryChar = binaryArray[i];
      if (binaryChar.length % 8 !== 0) {
        alert('Invalid binary format');
        return;
      }
      output += String.fromCharCode(parseInt(binaryChar, 2));
    }
    document.getElementById('output').value = output;
    document.getElementById('convertButton').textContent = 'Convert to Binary';
  } else {
    for (var i = 0; i < input.length; i++) {
      var binaryChar = input.charCodeAt(i).toString(2);
      // Pad the binary representation to ensure it is 16 bits long
      binaryChar = '0000000000000000'.slice(binaryChar.length) + binaryChar;
      output += ' ' + binaryChar;
    }
    document.getElementById('output').value = output;
    document.getElementById('convertButton').textContent = 'Convert to String';
  }

  document.getElementById('copyButton').disabled = false;
  isBinaryInput = !isBinaryInput;
}

function copyText() {
  var output = document.getElementById('output');
  output.select();
  document.execCommand('copy');
}

function pasteText() {
  navigator.clipboard.readText()
    .then(text => {
      document.getElementById('textInput').value = text;
    })
    .catch(err => {
      console.error('Failed to read clipboard contents: ', err);
    });
}
