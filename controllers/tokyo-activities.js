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

//NEW route
router.get('/new', (req, res, next) => {
    res.render('new')
})

//Edit Route - edit new items
router.get('/edit/:id', (req, res, next) => {
    TokyoActivity.findById(req.params.id)
        .then (activity => {
            res.render('edit', {data: activity})
        })
})

//****** HAVING TROUBLE WITH THE TWO GET ROUTES BELOW - ORDER DETERMINES WHICH ONE WORKS ******** //
//Find by ID - view more of an activity
router.get('/:id', (req, res, next) =>{
    TokyoActivity.findById({_id:req.params.id})
    .then(activities => {
        console.log(activities)
        res.render('show', {data: activities})
    })
    .catch(next)
})

//Find by Categories
router.get('/:category', (req, res, next) => {
    // res.send("hit")
    TokyoActivity.find({category: req.params.category})
    .then(activities => {
        // console.log(activities)
        // console.log(req.params.category)
        res.render('index', {data: activities})
        })
        .catch(next)
})


// //CRUD routes
// //CREATE - create their own activity
// router.post('/', (req, res, next) => {
//     // res.send(req.body);
//     TokyoActivity.create(req.body)
//     .then(activities => {
//         console.log(activities)
//         res.redirect('/tokyo')
//     })
//     .catch(next)
// })

// //UPDATE
// router.put('/edit/:id', (req, res, next) => {
//     console.log(req.body)
//     TokyoActivity.findOneAndUpdate(
//         {_id: req.params.id},
//         {title: req.params.title,
//         category: req.params.category,
//         address: req.params.address,
//         website: req.params.website,
//         time: req.params.time,
//         price: req.params.price},
//         {new:true}
//     )
//     .then(activities => {
//         res.render('show',{data: activities})
//     })
//     .catch(next)
// })

// //DELETE
// router.delete('/:id', (req, res, next) => {
//     TokyoActivity.findOneAndDelete({_id:req.params.id})
//     .then(results => {
//         console.log(`${results} was deleted`)
//     })
//     .catch(next)
//     .then(res.redirect('/tokyo'))
// })

module.exports = router