const mongoose = require('mongoose')

const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId

// Roles Schema
const RoleSchema = new Schema({
  roleName: {
    type: String,
    required: true,
  },
  level: Number,
  exp: Number,

  attributes: {
    webDev: Number,
    systemDev: Number,
    desktopDev: Number,
    mobileDev: Number,
    gameDev: Number,
    aiDev: Number,
  },
})

module.exports = mongoose.model('role', RoleSchema)
