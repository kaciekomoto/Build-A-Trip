const seedData = require('./tokyo-seeds.json')
const TokyoActivity = require('../models/tokyo-activities.js')

TokyoActivity.deleteMany({})
    // .then(() => TokyoActivity.deleteMany({}))
    .then(() => {
      return TokyoActivity.insertMany(seedData);
    })
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    process.exit();
  });