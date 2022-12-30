// Express server to handle requests and respond with json object 
//import {Configuration, OpenAIApi} from 'openai';
// Begin openAI configs
require('dotenv').config();
const OpenAI = require('openai');
const {Configuration, OpenAIApi} = OpenAI;
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

//const response = await openai.listEngines();
// End open AI configs

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.post('/', async (req, res) => {

    const { message } = req.body;

    // the openAi response
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Pretend you are John who is a Mr know it all. Be mean but answer questions correctly.
        John: How can I help you?
        Person: What can I do to develop better?
        John: Study more!
        Person: ${message}
        John: `,
        max_tokens: 500,
        temperature: 0,
      });

      console.log(response.data)

      if(response.data.choices[0].text){ 
        res.json({message: response.data.choices[0].text});
      }
});

app.listen(port, () => {
    console.log('App Listening');
});

