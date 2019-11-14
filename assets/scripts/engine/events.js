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
  $('#create-collection').on('click', onCreateCollection)
  $('#get_all_collections').on('click', onShowAllCollections)
}

// const onCreateCollection = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   console.log('data create is: ', data)
//   const sounds = []
//   for (let i = 0; i < 16; i++) {
//     sounds.push(data[i])
//   }
//   data.collection.sounds = sounds
//   console.log('data create is: ', data)
//   api.createCollection(data)
//     .then(ui.createCollectionSuccess)
//     .catch(ui.failure)
// }
const onCreateCollection = function (event) {
  event.preventDefault()
  console.log('clicked')
  const data = store.sounds
  console.log('data create is: ', data)
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
const onUpdate = function (event) {
  const collectionId = $(event.target).closest('section').data('id')
  store.collectionId = collectionId
  $('#browse-collection').modal('hide')
  $('#general-message').text('')
  $('#update').modal('show')
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

// Function plays a sound from a choosen library on a keydown
const playSound = function (event) {
  // Store KeyCode in key variable
  const key = event.which
  // Check if a pad was set with a collection of sounds from the DB and
  // if a key triggered is one of 16 corresponding to the pad keys (myPadKeys array)
  if (store.padIsReady === true && myPadKeys.some(keys => keys === key)) {
    const sound = new Audio()
    const index = myPadKeys.indexOf(key)
    // set a sourse of sound to play from the array of sounds from the DB
    console.log('souns is: ', sound)
    sound.src = store.pad[index]
    console.log('souns is: ', sound)
    sound.play()
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
