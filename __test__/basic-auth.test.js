'use strict'

const { server } = require('../src/server')
const supertest = require('supertest')
const mockRequest = supertest(server);

const Users = require('../src/auth/models/users-model')

require('@code-fellows/supergoose');

describe('WEB SERVER', () => {
  it ('should respond with a 404 on not found', async() => {
    return mockRequest.get('/wrong-route').then(data => {
      expect(data.status).toBe(404)
    })
  })
})

describe('Sign up route', () => {
  it('should create a new user', async() => {
    const response = await mockRequest.post('/signup').send({username: 'username', password: 'password'})
    expect(response.status).toBe(201)
    expect(typeof response.body).toBe('object')
    console.log(response.body)
    expect(response.body.username).toEqual('username')
  })
})

// describe('Sign in route', () => {
//   it('should sign in a user', async() => {
//     //  const request = await mockRequest.post('/signup').send({username: 'username', password: 'password'})
//      const response = await mockRequest.post('/signin').send({username: 'username', password: 'password'})
//      console.log(response.body)
//     // expect(response.status).toBe(200);
//   })
// })


