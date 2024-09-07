const mongoose = require('mongoose');
const User = require('./user');


const ProductSchema=new mongoose.Schema({
    content:{
        type:String,
        
    },
    productId:{
        required:true,
        type:String,
        trim:true,
        minlength:true
    },
    productImg:{
        type:JSON,
        required:true,
    },
    title:{
        type:String,
        required:true
    },
    product_categories:{
         type:String,
         trim:true,
         enum:['Shirts','Pants','Dress','Sarees','Skirts','Hoodies','Kids'],
         required:true
    },
    wear_categories:{
        type:String,        
        trim:true,
        enum:['men','women','kid'],
        required:true
   },
    price:{
        type:Number,
        trim:true,
        required:true
    } 
   
   
    
},{timestamps:true});

const Product= mongoose.model('Products',ProductSchema);

module.exports=Product;