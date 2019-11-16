'use strict'

const helpers = require('./helpers.js')

const createCollectionSuccess = function (data) {
  helpers.formReset()
  $('#general-message').text('Collection created')
  $('#create').modal('hide')
}

const deleteCollectionSuccess = function () {
  $('#general-message').text('Collection deleted')
}

const setCollectionSuccess = function (data) {
  helpers.setPad(data)
  $('#general-message').text('Collection is set')
  // coloring the pad
  $('.first-row').css('background', 'radial-gradient(#FFBD2E, #CA7D00)')
  $('.second-row').css('background', 'radial-gradient(#FF66AE, #B20154)')
  $('.third-row').css('background', 'radial-gradient(#6EDEFF, #0067C9)')
  $('.fourth-row').css('background', 'radial-gradient(#60FF69, #008A08)')
}

const showAllCollectionsSuccess = function (data) {
  helpers.populateHandlebars(data)
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
