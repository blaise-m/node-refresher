const path = require('path');
// FS module async
// let's use destructuring for this one..
const { readFile, writeFile } = require('fs');

const fileOnePath = path.resolve(__dirname, 'content', 'first.txt');
const fileTwoPath = path.resolve(__dirname, 'content', 'second.txt');
const resultFilePath = path.resolve(__dirname, 'content', 'result-async.txt');
const encoding = 'utf8';

readFile(fileOnePath, encoding, (err, result) => {
    if (err) {
        console.log(err);
        return;
    }

    const first = result;
    console.log(first);

    readFile(fileTwoPath, encoding, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }

        const second = result;
        console.log(second);

        const resultText = `File One: ${first}:::File Two: ${second}`;
        writeFile(resultFilePath, resultText, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }

            const third = result;
            console.log(third);

            readFile(resultFilePath, encoding, (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }

                const fourth = result;
                console.log(fourth);
            })
        });
    })
})
