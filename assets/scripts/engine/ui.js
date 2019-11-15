'use strict'

const store = require('../store')
const showCollectionsTemplate = require('../templates/helpers/collections-listing.handlebars')

const createCollectionSuccess = function (data) {
  $('#general-message').text('Collection created')
  $('.collection-name').val('')
  formReset()
  $('#create').modal('hide')
}

const formReset = () => {
  for (let i = 0; i < 16; i++) {
    $('.file-upload')[i].reset()
  }
}

const deleteCollectionSuccess = function () {
  $('#general-message').text('Collection deleted')
}

const setCollectionSuccess = function (data) {
  store.padIsReady = true
  const pad = []
  for (let i = 0; i < 16; i++) {
    pad.push(data.collection.sounds[i])
  }
  store.pad = pad
  $('#browse-collection').modal('hide')
  $('#start-playing').show()
  $('#general-message').text('Collection is set')
  // coloring the pad
  $('.first-row').css('background', 'radial-gradient(#FFBD2E, #CA7D00)')
  $('.second-row').css('background', 'radial-gradient(#FF66AE, #B20154)')
  $('.third-row').css('background', 'radial-gradient(#6EDEFF, #0067C9)')
  $('.fourth-row').css('background', 'radial-gradient(#60FF69, #008A08)')
}

const showAllCollectionsSuccess = function (data) {
  const showCollectionsHtml = showCollectionsTemplate({
    collections: data.collections
  })
  store.collections = data.collections
  $('#library').html(showCollectionsHtml)
  $('#general-message').text('Collections are displayed')
  $('#browse-message').text('')
}

const updateCollectionSuccess = function () {
  $('#update').modal('hide')
  $('#general-message').text('Collection is Updated Successfully')
}

const failure = function () {
  $('#general-message').text('Unknown error')
}

module.exports = {
  createCollectionSuccess,
  deleteCollectionSuccess,
  setCollectionSuccess,
  showAllCollectionsSuccess,
  updateCollectionSuccess,
  failure
}
