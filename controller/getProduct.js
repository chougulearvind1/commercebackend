const Product = require('../models/Product')

const getProduct = (req,res) => {
     console.log(req.body,'req body');
     Product.find(req.body).lean().exec().then((data) => { res.status(200).json({data}) })
     .catch((error) => { res.status(400).json({error:error}) })
}
module.exports=getProduct;