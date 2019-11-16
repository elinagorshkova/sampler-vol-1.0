'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const addHandlers = () => {
  $('.file-upload').on('submit', onCreateUpload)
  $('.file-upload-update').on('submit', onUpdateUpload)
}

const onCreateUpload = function (event) {
  // prevent default page reload
  event.preventDefault()
  // getting name of the clicked element, which is corresponding with sound index in the sounds array
  const index = event.target.name
  // Get Data from the form
  const data = new FormData(event.target)
  api.upload(data)
    .then(data => {
      // getting AWS url to the uploaded file
      const url = data.fileUpload.url
      // Adding the url to the sound array on corresponding index
      store.sounds[index] = url
      return data
    })
    .then(ui.uploadSucces)
    .catch(console.error)
}

const onUpdateUpload = function (event) {
  // prevent default page reload
  event.preventDefault()
  // We stored the soundIndex earlier from the deopdown input in Update form
  const index = store.soundIndex
  // Get Data from the form
  const data = new FormData(event.target)
  api.upload(data)
    .then(data => {
      // getting AWS url to the uploaded file
      const url = data.fileUpload.url
      // Replacing the old url with the new url
      store.sounds[index] = url
      return data
    })
    .then(ui.uploadSucces)
    .catch(console.error)
}

module.exports = {
  addHandlers,
  onCreateUpload
}
