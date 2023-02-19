const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const Product = require('../models/Product');

const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // the folder where the image will be saved
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname) // the name of the file in the folder
  }
});

const upload = multer({ storage: storage });

const createProduct = async (req, res) => {

    upload.single('image')(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
            // A Multer error occurred when uploading.
            return res.status(StatusCodes.BAD_REQUEST).json({
                success: false,
                message: 'Error uploading image'
            });
        } else if (err) {
            // An unknown error occurred when uploading.
            return res.status(StatusCodes.BAD_REQUEST).json({
                success: false,
                message: 'Error uploading image'
            });
        }

        // The file was uploaded successfully.
        const product = await Product.create({
            ...req.body,
            image: req.file.filename // the name of the file in the folder
        });

        res.status(StatusCodes.CREATED).json({
            success: true,
            data: product,
        });
    });
}

const getAllProducts = async (req, res) => {
    const products = await Product.find({});
    res.status(StatusCodes.OK).json({ products, count: products.length })
}

module.exports = {
    createProduct, getAllProducts
}