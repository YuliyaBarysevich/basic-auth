'use strict'

const express = require('express');
const cors = require('cors');

const app = express();

const router  = require('./auth/router')
const notFound = require('./error-handlers/404')
const errors = require('./error-handlers/500')

app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended : true }));
app.use(router)


app.use('*', notFound)
app.use(errors);

module.exports ={
  server: app,
  start: port => {
    app.listen(port, () => console.log(`server is up on http://localhost:${port}/`))
  }
}
