const path = require('path');
// FS module sync
const fs = require('fs');
const readFileSync = fs.readFileSync;
const writeFileSync = fs.writeFileSync;

const fileOnePath = path.resolve(__dirname, 'content', 'first.txt');
const fileTwoPath = path.resolve(__dirname, 'content', 'second.txt');
const encoding = 'utf8';

const first = readFileSync(fileOnePath, encoding);
const second = readFileSync(fileTwoPath, encoding);

console.log(first);
console.log(second);

const resultPath = path.resolve(__dirname, 'content', 'result.txt');
const resultText = `File One: ${first}::: File Two: ${second}`;

writeFileSync(resultPath, resultText);

const result = readFileSync(resultPath, encoding);
console.log(result);
