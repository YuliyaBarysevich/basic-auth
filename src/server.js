'use strict'

const express = require('express');
const cors = require('cors');

const app = express();

const router  = require('./auth/router')

app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended : true }));
app.use(router)


module.exports ={
  server: app,
  start: port => {
    app.listen(port, () => console.log(`server is up on http://localhost:${port}/`))
  }
}
