const mongoose = require('mongoose');
const User = require('./user');


const orderSchema=new mongoose.Schema({
   
},{timestamps:true});

const Product= mongoose.model('Products',ProductSchema);

module.exports=Product;