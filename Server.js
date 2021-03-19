const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) =>{
    res.send("Getting profile")
})

app.get('/profile', (req, res) => {
    res.send("Getting profile")
})
app.post('/profile', (req, res) => {
    const user = {
        name: 'Sally',
        hobby: 'soccer'
    }
    res.send(user)
})



app.listen(3000);