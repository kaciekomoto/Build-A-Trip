const express = require('express')
const router = express.Router()
const TokyoActivity = require('../models/tokyo-activities')

//GET routes
//HOME
router.get('/', (req, res, next) => {
    console.log('home route hit')
})


module.exports = router