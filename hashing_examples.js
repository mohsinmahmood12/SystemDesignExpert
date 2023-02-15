const utils = require('./hashing_utils')

const serverset1 = [
    'server0',
    'server1',
    'server2',
    'server3',
    'server4',
    'server5',
]

const serverset2 = [
    'server0',
    'server1',
    'server2',
    'server3',
    'server4',
    'server5',

]

const usernames = [
    'username0',
    'username1',
    'username2',
    'username3',
    'username4',
    'username5',
    'username6',
    'username7',
    'username8',
    'username9',

]


function pickServerSimple(username,servers){
    const hash = utils.hashString(username);
    return servers[hash % servers.length];
}

// Rendezvous
function pickServerRendezvous(username,servers){
    let maxScore = null;
    let maxServer = null;
    for(const server of servers){
        const score = utils.computeScore(username,server);
        if(score > maxScore || score > maxScore){
            maxScore = score;
            maxServer = server;
        }
    }
    return maxServer;
}


console.log("Simple Hashing Strategy :");

for(let username of usernames){
    const server1 = pickServerSimple(username,serverset1);
    const server2 = pickServerSimple(username,serverset2);
    const serversAreEqual = server1 === server2;
    console.log(`${username}: ${server1} => ${server2} | equal ${serversAreEqual}`);
}


console.log("Rendezvous Hashing Strategy :");

for(let username of usernames){
    const server1 = pickServerRendezvous(username,serverset1);
    const server2 = pickServerRendezvous(username,serverset2);
    const serversAreEqual = server1 === server2;
    console.log(`${username}: ${server1} => ${server2} | equal ${serversAreEqual}`);
}
