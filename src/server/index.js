
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const fetch = require('node-fetch');
app.use(cors());

dotenv.config();
const api_key = process.env.API_KEY;

app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
   });

app.use(cors());
app.use(bodyParser.urlencoded({ 
    extended: false 
}));
app.use(bodyParser.json());
app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
});

app.post('/inputText', async(req, res) => {
    console.log(req.body)
    const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${api_key}&url=${req.body.inputText}&lang=en`);
    try {
        const data = await response.json();
        console.log(data);
        res.send(data);
    }catch (error) {
     console.log("error", error);
    }
});


