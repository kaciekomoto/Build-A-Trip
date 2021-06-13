const mongoose = require('../db/connection')

const TokyoActivitySchema = new mongoose.Schema(
    {
        title: String,
        category: String,
        address: String,
        website: String,
        time: String,
        price: String
    }
)

const TokyoActivity = mongoose.model('TokyoActivity', TokyoActivitySchema)
module.exports = TokyoActivity;