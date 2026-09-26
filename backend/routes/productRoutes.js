const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// GET all products
router.get("/", async (req, res) => {
    try {
        const products = await Product.find().sort({ createdAt: -1 });

        res.json({
            status: "success",
            data: products
        });

    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message
        });
    }
});

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