const request = require('supertest');
const server = require('./server.js');
const utc = require('./server');
//testing time

describe('server.js', () => {
    it('2oo OK!', () => {
        return request(server)
        .get('/')
        .then(res=>{
            expect(res.status).toBe(200)        })
    });
    it('Sent Time/Date', () => {
        return request(server)
        .get('/')
        .then(res=>{
            expect(res.send)        })
    });
    it('should check for html', () => {
        return request(server)
        .get('/')
        .expect('Content-Type', /html/);
    });
});