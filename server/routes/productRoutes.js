const express = require('express')
const router = express.Router()

<<<<<<< HEAD
const { createProduct, getAllProducts  , uploadAnything ,updateProduct , deleteProduct } = require('../controllers/productControllers')

router.post("/create", uploadAnything , createProduct)
router.patch("/update/:id", uploadAnything , updateProduct)
router.delete("/delete/:id", deleteProduct)
=======
const { createProduct, getAllProducts  , uploadAnything } = require('../controllers/productControllers')

router.post("/create", uploadAnything , createProduct)
>>>>>>> 6ac163600d721a63a2111ebae500070e996e7391
router.get("/getall", getAllProducts)

module.exports = router 
