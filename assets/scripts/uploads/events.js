'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const addHandlers = () => {
  $('.file-upload').on('submit', onCreateUpload)
}

const onCreateUpload = function (event) {
  // prevent default page reload
  const id = event.target.name
  event.preventDefault()
  // Get Data from the form
  const data = new FormData(event.target)
  api.upload(data)
    .then(data => {
      const url = data.fileUpload.url
      store.sounds.splice(id, 0, url)
      return data
    })
    .then(ui.uploadSucces)
    .catch(console.error)
}

module.exports = {
  addHandlers,
  onCreateUpload
}
