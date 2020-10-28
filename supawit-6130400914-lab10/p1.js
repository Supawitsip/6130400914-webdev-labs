const {add} = require('./add');
const {subtract}  = require('./subtract');
const {divide} = require('./divide');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('add | subtract ', select => {
   /* const args = process.argv.slice(2);
    let first = process.args[0];
    let second = process.args[1];*/
    const first = Number(process.argv[2]), second = Number(process.argv[3]);
    if (select == "add") {
        console.log(`${first} + ${second} = ${add(first, second)}`);
    } else if (select == "subtract") {
        console.log(`${first} - ${second} = ${subtract(first, second)}`);
    } else {
        console.log(`Unknow operator`);
    }
    readline.close();
})

