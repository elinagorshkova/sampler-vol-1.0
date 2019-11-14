'use strict'
const authEvents = require('./auth/events')
const engineEvents = require('./engine/events')
const uxEvents = require('./ux/events')
const uploadEvents = require('./uploads/events')
const store = require('./store')

$(() => {
  authEvents.addHandlers()
  engineEvents.addHandlers()
  uxEvents.addHandlers()
  uploadEvents.addHandlers()
  initialize()
})

const initialize = function () {
  store.sounds = []
}
