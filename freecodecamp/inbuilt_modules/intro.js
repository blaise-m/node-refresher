const os = require('os');
const currentUser = os.userInfo();
const uptime = os.uptime();

console.log(`\nCurrent working directory: ${__dirname}`);
console.log(`Script file path: ${__filename}\n`);
console.log(currentUser);
console.log(`The ystem uptime is ${os.uptime() / 3600} hours`);

let counter = 0;
const interval = setInterval(() => {
    console.log('Hello World');
    counter += 1;
    if (counter == 5) {
        clearInterval(interval);
    }
}, 1000)
