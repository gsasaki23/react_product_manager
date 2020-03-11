// Import model
const Product = require("../models/products.model");

// Export functions to be called in Routes
module.exports = {
    // CREATE: Create one Product
    create(req, res) {
        Product.create(req.body)
            .then(Product => res.json(Product))
            .catch(err => res.json(err));
    },

    // READ: Get all Products
    getAll(req, res) {
        // Blank .find param gets all
        Product.find({})
            .then(Products => res.json(Products))
            .catch(err => res.json(err))
    },
    // READ: Get one Product by id
    getOne(req, res) {
        Product.findById({ _id: req.params.id })
            .then(Product => res.json(Product))
            .catch(err => res.json(err))
    },

    // UPDATE: Update one Product by id, re-running validators on any changed fields
    update(req, res) {
        Product.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            new: true
        })
            .then(updatedProduct => res.json(updatedProduct))
            .catch(err => res.json(err));
    },

    // DESTROY: Delete one Product by id
    delete(req, res) {
        Product.findByIdAndDelete(req.params.id)
            .then(deletedProduct => res.json(deletedProduct))
            .catch(err => res.json(err));
    },
};

// Format:
// module.exports.FUNCTION_NAME = (req, res) => {
//   MODEL.MONGOOSE_FUNCTION(PARAMS)
//     .then(VAR => res.json({MODEL: VAR}))
//     .catch(err => res.json(err))
// }