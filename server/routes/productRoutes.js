const express = require('express')
const router = express.Router()

const { createProduct, getAllProducts } = require('../controllers/productControllers')

router.post("/create", createProduct)
router.get("/getall", getAllProducts)

module.exports = router 