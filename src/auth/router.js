'use strict'


const express = require('express');
const router = express.Router();

const basicAuth = require('./middleware/basic')
const User = require('./models/users-model')
const bcrypt = require('bcrypt');
const base64 = require('base-64');



router.post('/signup',  async (req, res) => {

  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const user = new User(req.body);
    const record = await user.save();
    res.status(201).json(record);
  } catch (e) { res.status(403).send("Error Creating User"); }

});

router.post('/signin', basicAuth,(req, res) => {
// console.log(req.user)
res.status(200).json(req.user)
});

module.exports = router;
