const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const knex = require('knex');

const database = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'test',
      database : 'test2'
    }
})

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

// database.select('*').from('users').then(data => {
//     console.log(data)
// });

app.post('/signin', (req, res) => {
    const { email, name, password } = req.body;
    database('users')  
    .insert({
        email: email,
        name: name,
        joined: new Date()
    }).then(console.log)
    .then(response => { // ima u knex docs
        res.json(response);
    })
    .catch(err => res.status(400).json('unable to join'))
    // res.json(database.users[database.users.length-1]);
})

app.get('/profile/:id', (req, res) =>{
    const {id} = req.params;
    let found = false;
    database.select('*').from('users')
    .where({
        id: id
    })
    .then(user =>{
        res.json(user[0])
    })
    if(!found){
        res.status(400).json('not found')
    }
})

app.get('/useri', (req, res) => {
    database.select('*').from('users')
    .then(response =>{
        res.json(response)
    })
})

app.post('/register', (req, res) => {
    const { email, name, password } = req.body;
    database('users')
    .returning('*')
    .insert({
        email: email,
        name: name,
        joined: new Date()
    })
    .then(user => { // ima u knex docs
        res.json(user[0]);
    })
    .catch(err => res.status(400).json(err))
    // res.json(database.users[database.users.length-1]);
})

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


fs.readFile('./hello.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data.toString());
})

// fs.appendFile('./hello.txt', ' Bitconnect!', err =>{
//     if (err) {
//         console.log(err);
//     }
// })



// fs.writeFile('bb.txt', 'bb nub', err =>{
//     if (err) {
//         console.log(err)
//     }
// })

// fs.unlink('./bb.txt', err => {
//     if (err) {
//         console.log(err);
//     }
// })

app.listen(3000);