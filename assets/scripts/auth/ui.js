'use strict'

const store = require('../store')
const engineEvents = require('../engine/events')

const signUpSuccess = function () {
  document.getElementById('sign-up').reset()
  $('#general-message').text('Signed Up Successfully')
}

const signInSuccess = function (data) {
  // storing the user so we can access the user data later
  store.user = data.user
  // Populating the sidebar with collections from INDEX api call
  engineEvents.onShowAllCollections()
  document.getElementById('sign-in').reset()
  $('#general-message').text('Signed In Successfully')
  $('.when-signed-in').show()
  $('#when-not-signed-in').hide()
}

const changePasswordSuccess = function () {
  document.getElementById('change-password').reset()
  $('#pwd-change-message').text('Password Changed successfully')
  $('#change-pwd').modal('hide')
  $('#general-message').text('Password changed')
}

const signOutSuccess = function () {
  // clearing the store
  store.user = null
  // Resetting the pad
  store.pad = []
  $('#general-message').text('Signed Out Successfully')
  $('.when-signed-in').hide()
  $('#when-not-signed-in').show()
}

const authFailure = function () {
  $('#general-message').text('Incorrect credentials')
  // Reseting all the forms fields
  document.getElementById('sign-up').reset()
  document.getElementById('sign-in').reset()
  document.getElementById('change-password').reset()
}

const failure = function () {
  $('#general-message').text('Unknown Error')
}

module.exports = {
  failure,
  signInSuccess,
  signUpSuccess,
  signOutSuccess,
  changePasswordSuccess,
  authFailure
}
