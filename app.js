const API_URL = "http://localhost:5000";

console.log("StockSense frontend loaded");

async function checkBackend() {
    try {
        const response = await fetch(`${API_URL}/api/health`);
        const data = await response.json();

        console.log("Backend response:", data);

    } catch (error) {
        console.error("Backend connection failed:", error);
    }
}

document.addEventListener("DOMContentLoaded", () => {

    checkBackend();

    document
        .getElementById("addProductBtn")
        .addEventListener("click", () => {
            alert("Product management will be connected next.");
        });

    document
        .getElementById("receiptBtn")
        .addEventListener("click", () => {
            alert("Receipt operation will be connected next.");
        });

    document
        .getElementById("deliveryBtn")
        .addEventListener("click", () => {
            alert("Delivery operation will be connected next.");
        });

    document
        .getElementById("transferBtn")
        .addEventListener("click", () => {
            alert("Transfer operation will be connected next.");
        });

    document
        .getElementById("adjustmentBtn")
        .addEventListener("click", () => {
            alert("Adjustment operation will be connected next.");
        });

});