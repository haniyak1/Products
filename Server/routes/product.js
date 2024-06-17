const express = require('express')
const router = express.Router()

const Product = require('../models/product')



router.post('/addProduct', async(req,res) =>{
        try {
            const product = new Product({
                name : req.body.name,
                description : req.body.description,
                price: req.body.price,
                category : req.body.category
            })

            const newProduct = await product.save();
            res.json(newProduct)
        } catch (error) {
            res.status(400).json({message: error.message})
        }
})

router.get('/getAllProduct', async(req,res)=>{
    try {
        const totalProduct = await Product.find()
        res.json(totalProduct)
        
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.put('/update/:id' , async (req,res) =>{
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        
        res.json(updatedProduct)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})


router.delete('/delete/:id',async(req,res)=>{
    try {
        const deletedProduct = await Product.findByIdAndDelete(
            req.params.id
        )
    
        res.json(deletedProduct)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
    
})

module.exports = router