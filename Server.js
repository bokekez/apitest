const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/:id', (req, res) =>{
    res.status(404).send("not found");
})

app.get('/', (req, res) =>{
    // req.query -> /?
    // req.body
    // req.header
    // req.params -> /:
    res.send("Getting profile")
})

app.get('/profile', (req, res) => {
    res.send("Getting profile")
})
app.post('/profile', (req, res) => {
    console.log(req.body)
    const user = {
        name: 'Sally',
        hobby: 'soccer'
    }
    res.send(user)
})

fs.readFile('./hello.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data.toString());
})

fs.appendFile('./hello.txt', ' Bitconnect!', err =>{
    if (err) {
        console.log(err);
    }
})

fs.

// fs.writeFile('bb.txt', 'bb nub', err =>{
//     if (err) {
//         console.log(err)
//     }
// })

fs.unlink('./bb.txt', err => {
    if (err) {
        console.log(err);
    }
})

app.listen(3000);