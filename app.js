/*global escape: true */

(function() {
  'use strict';

  const readline = require('readline');
  const fs = require('fs');
  const fileName = process.argv[2];
  const printText = process.argv[3] || false;
  var chars = {};

  const rl = readline.createInterface({
    input: fs.createReadStream(fileName)
  });

  function compare(a, b) {
    if (a.char < b.char)
      return -1;
    else if (a.char > b.char)
      return 1;
    else
      return 0;
  }

  rl.on('line', (line) => {
    var lineChars = line.split('');
    lineChars.forEach(function(val) {
      if (chars[val]) {
        chars[val]++;
      } else {
        chars[val] = 1;
      }
    });
  });

  rl.on('close', () => {
    var charsArray = [];
    for (var char in chars) {
      try {
        var charObject = {
          "char": encodeURI(char),
          "count": chars[char]
        };
        charsArray.push(charObject);
      } catch (error) {
        console.error('escaped: ' + escape(char));
      }
    }
    charsArray.sort(compare);
    if (!printText) {
      console.log(JSON.stringify(charsArray, null, '  '));
    } else {
      charsArray.forEach(function(value) {
        console.log(value.char + '\t' + value.count);
      });
    }
  });
}());
