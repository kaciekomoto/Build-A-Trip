const mongoose = require('../db/connection')

const UserActivitySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    category: String,
    address: String,
    googleMap: String,
    website: String,
    notes: String,
})

module.exports = mongoose.model('UserActivity', UserActivitySchema)
