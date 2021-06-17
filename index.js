const express = require('express')
const app = express()
const cors = require('cors')
const methodOverride = require('method-override');
const ejsLayouts = require('express-ejs-layouts');
// const TokyoActivity = require('./models/tokyo-activities');
const tokyoController = require('./controllers/tokyo-activities')

//Initialize and Configure
app.set('view engine', 'ejs');
app.use(ejsLayouts)
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

//Set up Static files (i.e. for CSS)
app.use(express.static(__dirname + "/public"))

//CONTROLLERS
app.use('/tokyo', tokyoController)

//Port
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
    console.log(`PORT: ${app.get("port")}`);
  });



