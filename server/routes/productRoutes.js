const express = require('express')
const router = express.Router()

const { createProduct, getAllProducts  , uploadAnything } = require('../controllers/productControllers')

router.post("/create", uploadAnything , createProduct)
router.get("/getall", getAllProducts)

module.exports = router 
