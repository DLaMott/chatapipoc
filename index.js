// Express server to handle requests and respond with json object 


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.post('/', (req, res) => {
    res.json({
        message: "SUP"
    });
});

app.listen(port, () => {
    console.log('App Listening');
});

