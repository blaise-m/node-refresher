const path = require('path');

// Base file name
const filename = path.basename(__filename);
console.log(filename);

// Directory name
const dirname = path.dirname(__filename);
console.log(dirname);

// File extension
const extname = path.extname(__filename);
console.log(extname);

// Path object
const pathObj = path.parse(__filename);
console.log(pathObj);

// Concatenate paths
const pathUrl = path.join(__dirname, 'test', 'hello.html');
console.log(pathUrl);
