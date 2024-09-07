const mongoose = require('mongoose');

const UserSchema= new mongoose.Schema({
  Name:{
    type:String,
    required:true

  },
  UserName:{
    type:String,
    required:true,
    unique:true
  },
  Email:{
    type:String,
    required:true,
    unique:true,
    trim:true,
    match:[/.+\@.+\..+/, 'Please fill a valid email address']
  },
  password:{
    type:String,
    required:true,

  }
},{timestamps:true});
const User = mongoose.model('User', UserSchema);

module.exports = User;