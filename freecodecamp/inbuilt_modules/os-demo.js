const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// method returns system uptime in seconds
const uptime = os.uptime() / (60 * 60);
console.log(uptime);

// current os properties
const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs);

