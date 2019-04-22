const mongoose = require('mongoose');

const toppingSchema = new mongoose.Schema(
    {
        name: String,
        color: String
    }
);

const Topping = mongoose.model('Topping', toppingSchema);
module.exports = Topping;
