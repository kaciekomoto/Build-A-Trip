const TokyoActivity = require('../models/tokyo-activities.js')
const seedData = require('./tokyo-seeds.json')

TokyoActivity.deleteMany({})
    .then(() => {
      return TokyoActivity.insertMany(seedData);
    })
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    process.exit();
  });