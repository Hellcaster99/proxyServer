const axios = require('axios');

const BASE_URL = 'https://v2.jokeapi.dev/joke/Dark?';

const generate = async (req,res,next) => {
    try{
        const params = new URLSearchParams({
            [process.env.API_KEY]: process.env.API_KEY_VALUE,
            // With the API key you can also pass query params if any
        });

        const {data} = await axios.get(`${BASE_URL}${params}`);
        // you can use the same trick for passing your api key in headers as well
        
        return res.json(data);
    }catch (err){
        return next(err);
    }
}

module.exports = generate;