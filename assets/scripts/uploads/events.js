'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const addHandlers = () => {
  $('.file-upload').on('submit', onCreateUpload)
  $('.file-upload-update').on('submit', onCreateUploadUpdate)
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
      // store.sounds.splice(id, 0, url)
      store.sounds[id] = url
      return data
    })
    .then(ui.uploadSucces)
    .catch(console.error)
}

const onCreateUploadUpdate = function (event) {
  // prevent default page reload
  const index = store.soundIndex
  event.preventDefault()
  // Get Data from the form
  const data = new FormData(event.target)
  api.upload(data)
    .then(data => {
      const url = data.fileUpload.url
      store.sounds[index] = url
      // store.sounds.splice(index, 0, url)
      console.log('store.sounds: ', store.sounds)
      return data
    })
    .then(ui.uploadSucces)
    .catch(console.error)
}

module.exports = {
  addHandlers,
  onCreateUpload
}
