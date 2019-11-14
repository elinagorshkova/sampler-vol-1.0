'use strict'

const config = require('../config')
const store = require('../store')

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

const deleteCollection = function (collectionId) {
  return $.ajax({
    url: config.apiUrl + '/collections/' + collectionId,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const setCollection = function (collectionId) {
  return $.ajax({
    url: config.apiUrl + '/collections/' + collectionId,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const showAllCollections = function () {
  return $.ajax({
    url: config.apiUrl + '/collections',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

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

module.exports = {
  createCollection,
  deleteCollection,
  setCollection,
  showAllCollections,
  updateCollection
}
