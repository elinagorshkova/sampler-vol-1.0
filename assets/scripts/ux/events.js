'use strict'

const addHandlers = () => {
  $(document).ready(onPageLoads)
}

// Hiding main UX element before user is signed in
const onPageLoads = function () {
  $('.when-signed-in').hide()
}

module.exports = {
  addHandlers
}
