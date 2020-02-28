'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const {
    handledadJoke
} = require('./handlers')
// const { getDadJoke } = require('./__workshop/2-promises-in-action/exercise-3')

const PORT = process.env.PORT || 8000;


// handlers:

// const handledadJoke = async (req, res) => {

//     let joke;
//     let jokeType = req.body //get the type. 
//     //if the type is === to dad....
//     if(jokeType.type === 'dad') {
//     joke = await getDadJoke()
//     res.status(200).json({data: joke}) 

//     }



// }
express()



    .use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    })
    .use(morgan('dev'))
    .use(express.static('public'))
    .use(bodyParser.json())
    .use(express.urlencoded({
        extended: false
    }))
    .set('view engine', 'ejs')

    // endpoints
    .post('/jokes', handledadJoke)



    .listen(PORT, () => console.log(`Listening on port ${PORT}`));