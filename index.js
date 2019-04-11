const server = require('./api/server');
require('dotenv').config();


var rn = ['Welcome to the saddest server in the whole world',
            'We are ready!','Hello World','API ONLINE',
            'SKYNET ACTIVATED',
            'Database Online',
            '||.[o.o].||'];
var message = rn[Math.floor(Math.random()*rn.length)];

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => 
console.log(` => ${message} \n => Running on http://localhost:${PORT}/ \n`));
