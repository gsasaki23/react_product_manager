// Import mongoose
const mongoose = require("mongoose");
// Repeating message vars
const requiredMsg = "{PATH} is required.";
const minlengthMsg = "{PATH} must be at least {MINLENGTH} characters.";
const minMsg = "{PATH} must be at least {MIN}.";

// Create Product Schema
const ProductSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, requiredMsg],
			minlength: [2, minlengthMsg]
		},
		price: {
            // Later: use as ${price/100}
            type: Number,
			required: [true, requiredMsg],
			min: [0, minMsg]
        },
        description: {
			type: String,
			required: [true, requiredMsg],
			minlength: [2, minlengthMsg]
		},
	},{ timestamps: true }
)

// Create model, registering Product Schema and creating "Products" collection when we insert to it
const Product = mongoose.model("Product",ProductSchema);

// Export Product Model to be used in Controller
module.exports = Product;