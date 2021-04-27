'use strict'

const basicAuth = require('./middleware/basic')

const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');


const Users = require('./models/users-model')


const router = express.Router();


router.post('/signup',  async (req, res) => {

  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const user = new Users(req.body);
    const record = await user.save();
    res.status(201).json(record);
  } catch (e) { res.status(403).send("Error Creating User"); }

});

router.post('/signin', basicAuth,(req, res) => {
// console.log(req.user)
});

module.exports = router;
