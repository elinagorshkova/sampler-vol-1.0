'use strict'
const ui = require('./ui') // link to UI file

const addHandlers = () => {
  $(document).ready(onPageLoads)
}

const onPageLoads = function () {
  $('.when-signed-in').hide()
}

module.exports = {
  addHandlers,
  ui
}
