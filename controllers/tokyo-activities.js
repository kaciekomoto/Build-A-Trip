const express = require('express')
const router = express.Router()
let TokyoActivity = require('../models/tokyo-activities')

//GET routes
//HOME - view all acitivities
router.get('/', (req, res, next) => {
    TokyoActivity.find({})
    .then(activities => {
        res.render('index', {data: activities})
    })
    .catch(next)
})

//Find by ID - view more of an activity
router.get('/:id', (req, res, next) =>{
    TokyoActivity.findById({_id:req.params.id})
    .then(activities => {
        console.log(activities)
        res.render('show', {details: activities})
    })
    .catch(next)
})

//Find by Categories
router.get('/category/:category', (req, res, next) => {
    // res.send("hit")
    TokyoActivity.find({category: req.params.category})
    .then(activities => {
        // console.log(activities)
        // console.log(req.params.category)
        res.render('index', {data: activities})
        })
        .catch(next)
})

module.exports = router