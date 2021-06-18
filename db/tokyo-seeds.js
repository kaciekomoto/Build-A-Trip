const seedData = require('./tokyo-seeds.json')
const TokyoActivity = require('../models/tokyo-activities.js')
const User = require('../models/user.js')


TokyoActivity.deleteMany({})
    .then(() => User.deleteMany({}))
    .then(() => {
        //create a new user
      return User.create({username: 'Mr.Fake' , email: 'fake@email.com'})
        //create notes from seedData with author info
        .then((user) =>
          seedData.map((activities) => ({...activities, user: user._id})))
        //insert notes into db
        .then((activities) => TokyoActivity.insertMany(activities));
    })
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    process.exit();
  });