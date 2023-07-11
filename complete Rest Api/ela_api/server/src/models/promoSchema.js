const { Schema, model, models } = require('mongoose')

const promoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    }
});

module.exports = model('Promo', promoSchema);