'use strict'

const server = require('./src/server');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();


const PORT = process.env.PORT

const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(process.env.MONGODB_URI, options)
.catch(e => console.error('Could not start server', e.message));

server.start(PORT)


