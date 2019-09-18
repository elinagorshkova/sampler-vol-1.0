'use strict'

const store = require('../store')
const showCollectionsTemplate = require('../templates/helpers/collections-listing.handlebars')

const createCollectionSuccess = function (data) {
  $('#general-message').text('Collection created')
  document.getElementById('create-collection').reset()
  $('#create').modal('hide')
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
  $('.first-row').addClass('button-keys')
  $('.second-row').addClass('button-keys')
  $('.third-row').addClass('button-keys')
  $('.fourth-row').addClass('button-keys')
  $('#browse-collection').modal('hide')
  $('#general-message').text('Collection is set')
  // coloring the pad
  $('.first-row').css('background-color', '#8860d0')
  $('.second-row').css('background-color', '#5680e9')
  $('.third-row').css('background-color', '#84ceeb')
  $('.fourth-row').css('background-color', '#5ab9ea')
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
  $('#browse-collection').modal('hide')
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
