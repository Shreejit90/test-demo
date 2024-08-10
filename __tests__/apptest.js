// Import your application or specific functions you want to test
const request = require('supertest');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

// Write a simple test to check if the HTTP response is "Hello World!"
describe('GET /', () => {
  it('responds with Hello World!', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello World!');
  });
});

module.exports = app; // Export your app for testing purposes
