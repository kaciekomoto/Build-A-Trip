const express = require('express')
const router = express.Router()
const User = require('../models/user')
let TokyoActivity = require('../models/tokyo-activities')

//GET routes
router.get('/', (req, res, next) => {
    res.send('USER HOME')
})

router.get('/profile', (req, res, next) =>{
    res.send('view profile here')
})

router.get('/register', (req, res, next) => {
    res.send('register page')
})

router.get('/:username', (req, res, next) => {
    // return res.send(`Account of ${req.params.username}`)
    User.find({username: req.params.username})
    .then(itinerary => {
        console.log(itinerary)
        res.render('user-index', {userData: itinerary})
    })
    .catch(next)
})


module.exports = router