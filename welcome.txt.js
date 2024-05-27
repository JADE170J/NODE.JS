// file-system.js
const fs = require('fs');

// Create welcome.txt with "Hello Node"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;
    console.log('File created and saved as welcome.txt');
});

// Read and console.log data from welcome.txt
fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
