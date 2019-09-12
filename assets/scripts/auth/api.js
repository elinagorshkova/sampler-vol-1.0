'use strict'
const config = require('../config')
const store = require('../store')

// POSTs a new game in API
const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}
// Checks email/password pair from the input field and returns token
const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

// PATCHes password in API, usong data from input field
const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// Deletes Token
const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}
