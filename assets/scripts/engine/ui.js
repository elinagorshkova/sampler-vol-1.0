'use strict'

const store = require('../store')
const showCollectionsTemplate = require('../templates/helpers/collections-listing.handlebars')

const createCollectionSuccess = function (data) {
  console.log('Collection created')
}

const deleteCollectionSuccess = function () {
  console.log('Deleted')
}

const setCollectionSuccess = function (data) {
  const pad = []
  for (let i = 0; i < 16; i++) {
    pad.push(data.collection.sounds[i])
  }
  store.pad = pad
  console.log(store.pad)
}

const showAllCollectionsSuccess = function (data) {
  console.log(data)
  const showCollectionsHtml = showCollectionsTemplate({
    collections: data.collections
  })
  $('#library').html(showCollectionsHtml)
}

const failure = function () {
  console.error('Failure')
}

module.exports = {
  createCollectionSuccess,
  deleteCollectionSuccess,
  setCollectionSuccess,
  showAllCollectionsSuccess,
  failure
}
