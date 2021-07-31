const express = require('express');
const app = express();
const { models: { Actor, Movie } } = require('./db')

module.exports = app;

app.get('/', (req, res)=> {
    res.send(`
        <html>
            <body>
                The API
            </body>
        </html>
    `);
});

app.get('/api/movies', async(req, res, next)=> {
    try{
        res.send(await Movie.findAll());
    }
    catch(ex) {
        console.log(ex)
    }
})


app.get('/api/actors', async(req, res, next)=> {
    try{
        res.send(await Actor.findAll());
    }
    catch(ex) {
        console.log(ex)
    }
})