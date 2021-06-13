const express = require('express')
const router = express.Router()
const TokyoActivity = require('../models/tokyo-activities')

//GET routes

//HOME - view all acitivities
router.get('/', (req, res, next) => {
    // console.log('home route hit')
    TokyoActivity.find({})
    .then(activities => res.send(activities))
    .catch(next)
})

//Find by ID - view a single activity
router.get('/:id', (req, res, next) =>{
    TokyoActivity.findById({_id:req.params.id})
    .then(activities => res.send(activities))
    .catch(next)
})


//CRUD routes
//CREATE - create their own activity
router.post('/', (req, res, next) => {
    console.log(req.body);
    TokyoActivity.create(req.body)
    .then(activities => {
        console.log(activities)
        res.redirect('/tokyo')
    })
    .catch(next)
})

//UPDATE
router.put('/:id', (req, res, next) => {
    console.log(req.body)
    TokyoActivity.findOneAndUpdate(
        {_id: req.params.id},
        {title: req.params.title,
        category: req.params.category,
        address: req.params.address,
        website: req.params.website,
        time: req.params.time,
        price: req.params.price},
        {new:true}
    )
    .then(activities => {
        res.send(activities)
        //add ejs here later on
    })
    .catch(next)
})

//DELETE
router.delete('/:id', (req, res, next) => {
    TokyoActivity.findOneAndDelete({_id:req.params.id})
    .then(results => {
        console.log(`${results} was deleted`)
    })
    .catch(next)
    .then(res.redirect('/tokyo'))
})

module.exports = router