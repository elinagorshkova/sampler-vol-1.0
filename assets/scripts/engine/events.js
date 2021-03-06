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
  $('#update-collection').on('click', onUpdateCollection)
  $('#library').on('click', '.delete-collection', onDeleteCollection)
  $('#create-collection').on('click', onCreateCollection)
  $('#get_all_collections').on('click', onShowAllCollections)
  $('.collection-name').on('submit', updateCollectionName)
  $('#set-index').on('submit', updateSoundIndex)
}
/* Storing the collection name from the create/update forms in the store to
further send it in a post/put request */
const updateCollectionName = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  store.name = data.collection.name
}

const updateSoundIndex = function (event) {
  event.preventDefault()
  const keys = ['1', '2', '3', '4', 'Q', 'W', 'E', 'R', 'A', 'S', 'D', 'F', 'Z', 'X', 'C', 'V']
  const data = getFormFields(event.target)
  store.soundIndex = keys.indexOf(data.soundIndex)
}

const onCreateCollection = function (event) {
  event.preventDefault()
  // We will pass the data from the store to the api call
  const name = store.name
  const data = store.sounds
  api.createCollection(name, data)
    .then(ui.createCollectionSuccess)
    .then(onShowAllCollections)
    .catch(ui.failure)
}

const onDeleteCollection = function (event) {
  event.preventDefault()
  const collectionId = $(event.target).closest('section').data('id')
  api.deleteCollection(collectionId)
    .then(ui.DeleteCollectionSuccess)
    .then(onShowAllCollections)
    .catch(ui.failure)
}

const onSetCollection = function (event) {
  event.preventDefault()
  const collectionId = $(event.target).closest('section').data('id')
  api.setCollection(collectionId)
    .then(ui.setCollectionSuccess)
    .catch(ui.failure)
}
const onUpdate = function (event) {
  const collectionId = $(event.target).closest('section').data('id')
  store.collectionId = collectionId
  $('#browse-collection').modal('hide')
  $('#general-message').text('')
  $('#update').modal('show')

  api.setCollection(collectionId)
    .then(res => {
      store.sounds = res.collection.sounds
      store.name = res.collection.name
      $('#collection-name-update').val(store.name)
    })
}

const onUpdateCollection = function (event) {
  event.preventDefault()
  // We will pass the data from the store to the api call
  const name = store.name
  const data = store.sounds
  const id = store.updateId
  api.updateCollection(id, name, data)
    .then(ui.updateCollectionSuccess)
    .then(onShowAllCollections)
    .catch(ui.failure)
}

// Function plays a sound from a choosen library on a keydown
const playSound = function (event) {
  $('#' + store.key).removeClass('animated pulse duration-1s')
  // Store KeyCode in key variable
  store.key = event.which
  // Check if a pad was set with a collection of sounds from the DB and
  // if a key triggered is one of 16 corresponding to the pad keys (myPadKeys array)
  if (store.padIsReady === true && myPadKeys.some(keys => keys === store.key)) {
    const sound = new Audio()
    const index = myPadKeys.indexOf(store.key)
    // set a sourse of sound to play from the array of sounds from the DB
    sound.src = store.pad[index]
    sound.play()
    $('#' + store.key).addClass('animated pulse duration-1s')
    $('#general-message').text('Sound Played')
  }
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
