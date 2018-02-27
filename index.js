const app = require('./src/server')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3000
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/coderpg'

/* *******************************
   INITIALIZING MONGODB and SERVER
   *******************************
*/

mongoose.connect(MONGO_URI)
  .then(res => console.log('Successfully connected to mongodb'))
  .catch(err => console.log(err))

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`)
})
