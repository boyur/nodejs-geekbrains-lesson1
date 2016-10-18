var colors = require('colors/safe');
var ansi = require('ansi');
var cursor = ansi(process.stdout);

function redBeep(text, beep) {
  console.log(colors.red(text));

  if (beep) {
    cursor.beep();
  }
}

module.exports.go = redBeep;