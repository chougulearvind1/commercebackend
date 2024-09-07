const express = require('express');
const register =require('../controller/register')
const login=require('../controller/login')
const upload=require('../middleware/multer_middleware.js');
const authenticate = require('../middleware/protected');
const addProduct = require('../controller/addProduct.js')
const getProduct = require('../controller/getProduct.js');



const router=express.Router();

try {
  
   

    router.post('/auth/register',upload.single('profile_picture'),register);//add default image for user profile
    router.post('/auth/login',login)
    router.post('/AddProduct',upload.single('productImg'),addProduct)
    router.post('/getAllProduct',getProduct)
 
    
    
} catch (error) {
    console.log(error);
}




module.exports={auth_routes:router};