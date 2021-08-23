const mongoose = require('../db/connection')

const TokyoActivitySchema = new mongoose.Schema(
    {
        title: String,
        img: String,
        category: String,
        genLocation: String,
        address: String,
        googleMap: String,
        website: String,
        description: String,
        time: String,
        english: String,
        price: String
    }
)

const TokyoActivity = mongoose.model('TokyoActivity', TokyoActivitySchema)
module.exports = TokyoActivity;