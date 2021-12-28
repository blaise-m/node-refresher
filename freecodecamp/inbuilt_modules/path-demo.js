const path = require('path');

// platform specific seperator
const sep = path.sep;
//console.log(sep);

// join sequence of path segments using platform specific seperator
const filePath = path.join(__dirname, 'content', 'test.txt');
//console.log(filePath);

// return the basename from a file path
const basename = path.basename(filePath);
//console.log(basename);

// return the extension from a filepath
const extname = path.extname(filePath);
//console.log(extname);

// return the absolute path
const absPath = path.resolve('.', 'content', 'subfolder', 'test.txt');
//console.log(absPath);

