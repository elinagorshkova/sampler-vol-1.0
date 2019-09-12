'use strict'
const authEvents = require('./auth/events')
const engineEvents = require('./engine/events')
const uxEvents = require('./ux/events')

$(() => {
  authEvents.addHandlers()
  engineEvents.addHandlers()
  uxEvents.addHandlers()
})
