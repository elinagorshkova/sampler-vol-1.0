'use strict'

const config = require('../config')
const store = require('../store')

const createCollection = function (data) {
  return $.ajax({
    url: config.apiUrl + '/collections/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteCollection = function (collectionId) {
  return $.ajax({
    url: config.apiUrl + '/collections/' + collectionId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const setCollection = function (collectionId) {
  return $.ajax({
    url: config.apiUrl + '/collections/' + collectionId,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showAllCollections = function () {
  return $.ajax({
    url: config.apiUrl + '/collections',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateCollection = function (data) {
  return $.ajax({
    url: config.apiUrl + '/collections/' + store.collectionId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createCollection,
  deleteCollection,
  setCollection,
  showAllCollections,
  updateCollection
}
