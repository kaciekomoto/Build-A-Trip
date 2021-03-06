const express = require('express')
const app = express()
const cors = require('cors')
const methodOverride = require('method-override');
const ejsLayouts = require('express-ejs-layouts');
const tokyoController = require('./controllers/tokyo-activities')
const userController = require('./controllers/user-activities')

//Initialize and Configure
app.use(cors())
app.set('view engine', 'ejs');
app.use(ejsLayouts)
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))


//Set up Static files (i.e. for CSS)
app.use(express.static(__dirname + "/public"))
app.get('/',(req, res) => {
  res.redirect('/tokyo')
})

//CONTROLLERS
app.use('/tokyo', tokyoController)
app.use('/users', userController)

//Port
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
    console.log(`PORT: ${app.get("port")}`);
  });



