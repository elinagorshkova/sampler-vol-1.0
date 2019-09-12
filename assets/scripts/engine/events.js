'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api') // link to API call file
const ui = require('./ui') // link to UI file
const store = require('../store')

const myPadKeys = [49, 50, 51, 52, 81, 87, 69, 82, 65, 83, 68, 70, 90, 88, 67, 86]

const addHandlers = () => {
  $(document).on('keydown', playSound)
  // $(document).on( 'keydown click', playSound)
  $('#library').on('click', '.set-collection', onSetCollection)
  $('#library').on('click', '#update-button', onUpdate)
  $('#update-collection').on('submit', onUpdateCollection)
  $('#library').on('click', '.delete-collection', onDeleteCollection)
  $('#create-collection').on('submit', onCreateCollection)
  $('#get_all_collections').on('click', onShowAllCollections)
}

const onCreateCollection = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  let sounds = []
  for (let i = 0; i < 16; i++) {
    sounds.push(data[i])
  }
  sounds = ',' + sounds.toString() + ','
  data.collection.sounds = sounds
  api.createCollection(data)
    .then(ui.createCollectionSuccess)
    .catch(ui.failure)
}

const onDeleteCollection = function (event) {
  event.preventDefault()
  const collectionId = $(event.target).closest('section').data('id')
  api.deleteCollection(collectionId)
    .then(ui.DeleteCollectionSuccess)
    .catch(ui.failure)
}

const onSetCollection = function (event) {
  event.preventDefault()
  const collectionId = $(event.target).closest('section').data('id')
  api.setCollection(collectionId)
    .then(ui.setCollectionSuccess)
    .catch(ui.failure)
}

const onUpdate = function () {
  $('#browse-collection').hide()
  const collectionId = $(event.target).closest('section').data('id')
  store.collectionId = collectionId
}

const onUpdateCollection = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  let sounds = []
  for (let i = 0; i < 16; i++) {
    sounds.push(data[i])
  }
  sounds = ',' + sounds.toString() + ','
  data.collection.sounds = sounds
  api.updateCollection(data)
    .then(ui.updateCollectionSuccess)
    .catch(ui.failure)
}

const playSound = function (event) {
  if (store.padIsReady === true) {
  const key = event.which
  const sound = new Audio()
  const index = myPadKeys.indexOf(key)
  sound.src = store.pad[index]
  sound.play()
} else return
}

const onShowAllCollections = function () {
  api.showAllCollections()
    .then(ui.showAllCollectionsSuccess)
    .catch(ui.failure)
}

module.exports = {
  addHandlers,
  playSound,
  onCreateCollection,
  onDeleteCollection,
  onSetCollection,
  onShowAllCollections,
  onUpdateCollection,
  onUpdate
}
