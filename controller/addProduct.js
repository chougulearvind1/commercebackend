const Product = require("../models/Product");


 

const addProduct = async (req,res) => {
  // const { content,productId, productImg,title,product_categories,wear_categories,price}= req.body
  const productImg = req.file ;
  const product= new Product({...req.body,productImg})
  
   await product.save()
   .then(() => { res.status(200).json({message:'product added'}) })
   .catch((error) => { res.status(400).json({message:error}) })
 
  
    
}

module.exports=addProduct;
