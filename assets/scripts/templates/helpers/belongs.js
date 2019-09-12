'use strict'
const store = require('../../store')

const belongs = (num) => {
  if (num === store.user.id) {
    console.log(true)
  } else {
    console.log(false)
  }
}

module.exports = belongs
