const { StatusCodes } = require('http-status-codes')
const multer = require('multer')
const Product = require('../models/Product')

const storage = multer.diskStorage({

    destination: (req, file, callback) => {
        callback(null, 'img/products')
    },

    filename: (req, file, callback) => {
        const extension = file.mimetype.split('/')[1];
        callback(null, `product-${file.originalname.split('.')[0]}-${Date.now()}.${extension}`)
    }
});


const fileFilter = (req, file, callback) => {

    if (file.mimetype.startsWith('image')) callback(null, true);
    else callback(new AppError('Please upload an Image', 400), false);
}

const upload = multer({ storage, fileFilter });

const uploadAnything = upload.any();

const createProduct = async (req, res) => {

    const file = req.files[0];
    req.body.image = file.filename;
    const product = await Product.create(req.body)

    res.status(StatusCodes.CREATED).json({
        success: true,
        data: req.body,
    });

}

const getAllProducts = async (req, res) => {
    const products = await Product.find({});
    res.status(StatusCodes.OK).json({ products, count: products.length })
}

module.exports = {
    createProduct, getAllProducts, uploadAnything
}