const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add a product
router.post('/', async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete a product
router.delete('/:id', async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

// GET one product
router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                status: "error",
                message: "Product not found"
            });
        }

        res.json({
            status: "success",
            data: product
        });

    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message
        });
    }
});

// POST a new product
router.post("/", async (req, res) => {
    try {
        const { name, sku, category, unit, reorderLevel } = req.body;

        const product = new Product({
            name,
            sku,
            category,
            unit,
            reorderLevel
        });

        const savedProduct = await product.save();

        res.status(201).json({
            status: "success",
            message: "Product created successfully",
            data: savedProduct
        });

    } catch (error) {
        res.status(400).json({
            status: "error",
            message: error.message
        });
    }
});

module.exports = router;