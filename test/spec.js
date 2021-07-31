const { expect } = require('chai');
const { syncAndSeed } = require('../db');

const app = require('supertest')(require('../app'));

describe('Routes', ()=> {
    beforeEach(()=> syncAndSeed());
    describe('GET /', ()=> {
        it('Info about the api', async() => {
            const response = await app.get('/');
            expect(response.status).to.equal(200);
            expect(response.text).to.include('The API');

        })
    })
    describe('GET /api/movies', ()=> {
        it('Displaying all the movies', async() => {
            const response = await app.get('/api/movies');
            expect(response.status).to.equal(200);
            expect(response.body.length).to.equal(4);
        })
    }) 
    describe('GET /api/actors', ()=> {
        it('Displaying all the Actors', async() => {
            const response = await app.get('/api/actors');
            expect(response.status).to.equal(200);
            expect(response.body.length).to.equal(5);
        })
    }) 
}) 
