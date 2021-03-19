 const http = require('http');

 const server = http.createServer((req, res) => {
     const user = {
         name: 'John',
         hobby: 'Skating'
     }
     res.setHeader('Content-Type', 'application/json');
     res.end(JSON.stringify(user));
 })
 
 server.listen(3000);
 
 const a = 5;
 const b = 9;

 console.log(a+b);