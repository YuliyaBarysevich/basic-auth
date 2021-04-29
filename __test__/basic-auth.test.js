'use strict'

const { server } = require('../src/server')
const supertest = require('supertest')
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

const Users = require('../src/auth/models/users-model')


describe('WEB SERVER', () => {
  it ('should respond with a 404 on not found', async() => {
    return mockRequest.get('/wrong-route').then(data => {
      expect(data.status).toBe(404)
    })
  })
})

let testUser = {username: 'testUser', password: 'testPassword'}

describe('AUTH routes', () => {
  it('should sign up a new user', async() => {
    const response = await mockRequest.post('/signup').send(testUser)
    expect(response.status).toBe(201)
    expect(typeof response.body).toBe('object')
    console.log(response.body)
    expect(response.body.username).toEqual('testUser')
  })

  it('should sign in a user', async() => {
     const response = await mockRequest.post('/signin')
       .auth(testUser.username, testUser.password)
     
    expect(response.status).toBe(200);
    expect(response.body.username).toEqual(testUser.username)
  })
})




