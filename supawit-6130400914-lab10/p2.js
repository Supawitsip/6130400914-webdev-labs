let arr = [];
const fetch = require("node-fetch")
async function getUser() {
    let response = await fetch(`http://api.github.com/users`)
    let data = await response.json();

    data.forEach(async (user) => {
        let responseName = await fetch(`http://api.github.com/users/${user.login}`) ///${name}
        let dataName = await response.json();
        console.log(`{login: ${user.login}, name: ${dataName.name}}`);
    });
}

getUser()




