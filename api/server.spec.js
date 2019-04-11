const request = require('supertest');
const server = require('./server.js')
//testing time

describe('server.js', () => {
    it('2oo OK!', () => {
        return request(server)
        .get('/')
        .then(res=>{
            expect(res.status).toBe(200)        })
    });
});