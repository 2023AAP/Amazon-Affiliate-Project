const express = require('express')
const router = express.Router()

const { createProduct, getAllProducts  , uploadAnything ,updateProduct , deleteProduct } = require('../controllers/productControllers')

router.post("/create", uploadAnything , createProduct)
router.patch("/update/:id", uploadAnything , updateProduct)
router.delete("/delete/:id", deleteProduct)
router.get("/getall", getAllProducts)

module.exports = router 