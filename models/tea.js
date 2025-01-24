const mongoose = require('mongoose')


const teaItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    prize: {
        type: Number,
        required: true
    },
    taste: {
        type: String,
        enum: ["sweet", "spicy", "sour"]
    },
    is_drink: {
        type: Boolean,
        default: false
    },
  
    num_sales: {
        type: String,
        default: 0,
    }


})

const teaItem = mongoose.model("teaItem", teaItemSchema)

module.exports = teaItem