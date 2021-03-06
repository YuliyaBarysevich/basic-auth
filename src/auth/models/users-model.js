'use strict'

const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const users = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }
});

users.statics.authenticateBasic = async function (username, password){
  const user = await this.findOne({ username: username })
  const valid = await bcrypt.compare(password, user.password);
  if(valid){
    return user
  }else {
    throw new Error('Invalid User')
  }
}
module.exports = mongoose.model('users', users);

