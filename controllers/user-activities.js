const express = require('express')
const router = express.Router()
const UserActivity = require('../models/user-activities')

//GET routes
//HOME - view all acitivities
router.get('/', (req, res, next) => {
    UserActivity.find({})
    .then(activities => {
        res.render('user-index', {data: activities})
    })
    .catch(next)
})

//NEW route
router.get('/new', (req, res, next) => {
    res.render('new')
})

//Find by ID - view more of an activity
router.get('/:id', (req, res, next) =>{
    UserActivity.findById({_id:req.params.id})
    .then(activities => {
        console.log(activities)
        res.render('user-show', {data: activities})
    })
    .catch(next)
})

//Edit Route - edit new items
router.get('/edit/:id', (req, res, next) => {
    UserActivity.findById(req.params.id)
        .then (activity => {
            res.render('edit', {data: activity})
        })
})

//CRUD - Build their itinerary
//CREATE - create their own activity
router.post('/', (req, res, next) => {
    // res.send(req.body);
    UserActivity.create(req.body)
    .then(activities => {
        console.log(activities)
        res.redirect('/users')
    })
    .catch(next)
})

//UPDATE
router.put('/:id', (req, res, next) => {
    console.log(req.body)
    UserActivity.findOneAndUpdate(
        {_id: req.params.id},
        {title:req.body.title,
        website:req.body.website,
        address:req.body.address,
        notes: req.body.notes},
        {new:true}
    )
    .then(activities => {
        res.render('user-show',{data: activities})
    })
    .catch(next)
})

//DELETE
router.delete('/:id', (req, res, next) => {
    UserActivity.findOneAndDelete({_id:req.params.id})
    .then(results => {
        console.log(`${results} was deleted`)
    })
    .catch(next)
    .then(res.redirect('/users'))
})


module.exports = router