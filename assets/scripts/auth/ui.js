'use strict'

const store = require('../store')

const signUpSuccess = function () {
  $('#general-message').text('Signed Up Successfully')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#general-message').text('Signed In Successfully')
  $('.when-signed-in').show()
  $('#when-not-signed-in').hide()
}

const changePasswordSuccess = function () {
  $('#general-message').text('Password Changed successfully')
}

const signOutSuccess = function () {
  store.user = null
  $('#general-message').text('Signed Out Successfully')
  $('.when-signed-in').hide()
  $('#when-not-signed-in').show()
}

const authFailure = function () {
  $('#general-message').text('Incorrect credentials')
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
