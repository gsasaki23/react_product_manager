// Import controller
const ProductController = require("../controllers/products.controller");

// Exports routes to be called in server.js
module.exports = app => {
    app.post("/api/products/new", ProductController.create);
    app.get("/api/products/", ProductController.getAll);
    app.get("/api/products/:id", ProductController.getOne);
    app.put("/api/products/update/:id", ProductController.update);
    app.delete("/api/products/delete/:id", ProductController.delete);
};

// Format:
// app.MONGOOSE_FUNCTION("ROUTE", CONTROLLER_FUNCTION)