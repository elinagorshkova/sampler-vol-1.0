'use strict'

const config = require('../config')
const store = require('../store')

// RESTful Api calls:

// INDEX
const showAllCollections = function () {
  return $.ajax({
    url: config.apiUrl + '/collections',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

// SHOW
const setCollection = function (collectionId) {
  return $.ajax({
    url: config.apiUrl + '/collections/' + collectionId,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

// POST
const createCollection = function (name, data) {
  return $.ajax({
    url: config.apiUrl + '/collections/',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: {
      'collection': {
        'name': name,
        'sounds': data
      }
    }
  })
}

// UPDATE
const updateCollection = function (id, name, data) {
  return $.ajax({
    url: config.apiUrl + '/collections/' + store.collectionId,
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: {
      'collection': {
        'name': name,
        'sounds': data
      }
    }
  })
}

// DELETE
const deleteCollection = function (collectionId) {
  return $.ajax({
    url: config.apiUrl + '/collections/' + collectionId,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  createCollection,
  deleteCollection,
  setCollection,
  showAllCollections,
  updateCollection
}
