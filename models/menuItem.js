const mongoose = require('mongoose')
const { type } = require('os')
const { stringify } = require('querystring')

const menuItemSchema = new mongoose.Schema({
    name:{
        type:String,
        required :true
    },
    prize:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum :["sweet","spicy","sour"]
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingredients:{
        type:String,
        default:[]

    },
    num_sales:{
        type:String,
        default:0,
    }

})


const menuItem = mongoose.model("menuItem", menuItemSchema);

module.exports = menuItem;
