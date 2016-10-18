var ansi = require('ansi');
var cursor = ansi(process.stdout);

console.log("Привет Мир!");

cursor.beep();