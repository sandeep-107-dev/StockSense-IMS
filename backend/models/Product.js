const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        sku: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },

        category: {
            type: String,
            required: true,
            trim: true
        },

        unit: {
            type: String,
            required: true,
            trim: true
        },

        reorderLevel: {
            type: Number,
            required: true,
            min: 0
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Product", productSchema);