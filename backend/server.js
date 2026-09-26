require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/products", productRoutes);
app.get("/", (req, res) => {
    res.send("StockSense Backend is Running!");
});

app.get("/api/health", (req, res) => {
    res.json({
        status: "success",
        message: "StockSense API is running"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`StockSense server running on port ${PORT}`);
});