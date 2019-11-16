'use strict'

const store = require('../store')
const showCollectionsTemplate = require('../templates/helpers/collections-listing.handlebars')

// Clears the create/update forms
const formReset = () => {
  $('.collection-name').val('')
  for (let i = 0; i < 16; i++) {
    $('.file-upload')[i].reset()
  }
}

// Making the sounds urls available to the user on the pad
const setPad = (data) => {
  // we want the pad to be triggered on keystroke only if the pad is ready
  store.padIsReady = true
  const pad = []
  // populating the pad array with the data from the get request
  for (let i = 0; i < 16; i++) {
    pad.push(data.collection.sounds[i])
  }
  // save the populated array in the store
  store.pad = pad
}

// Populate the sidebar with the collections data from INDEX Api call
const populateHandlebars = (data) => {
  // save the data in the store
  store.collections = data.collections
  // checking each collection whether it was created by the current user or not
  // The user can update and delete only those collections thet they created ('editable')
  store.collections.map(n => {
    if (store.user._id.includes(n.owner)) {
      n.editable = true
    } else {
      n.editable = false
    }
  })
  // Populating the handlebars with the collections data with added 'editable' field
  const showCollectionsHtml = showCollectionsTemplate({
    collections: data.collections
  })
  $('#library').html(showCollectionsHtml)
}

module.exports = {
  formReset,
  setPad,
  populateHandlebars
}
