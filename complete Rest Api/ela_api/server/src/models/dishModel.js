const {Schema, model, models} = require('mongoose')

const dishSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

const Dish = models.Dish || model('Dish', dishSchema);
module.exports = Dish