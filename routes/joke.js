const express = require('express');
const rateLimit = require('express-rate-limit');
const makeAJoke = require('../controller/make-a-joke');

const router = express.Router();

const limiter = rateLimit({
    windowMs: 10*1000, // time limit threshold for number of requests defined below
    max: 2, // amount of requests you can make in the time limit defined above
    message: "Too many requests! Try again in 10 seconds",
    headers: true
})

const customKeys = new Map();
customKeys.set('dark123',true);

router.get('/joke', limiter,
(req, res, next)=>{
    const key = req.get('X-KEY');
    if(customKeys.has(key)){
        next();
    }else{
        const err = new Error('Invalid API Key');
        next(err);
    }
}, // api key validator
makeAJoke);

module.exports = router;