'use strict'

const { server } = require('../src/server')
const supertest = require('supertest')
const mockRequest = supertest(server);

require('@code-fellows/supergoose');

