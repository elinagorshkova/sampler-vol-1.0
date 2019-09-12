'use strict'

const store = require('../store')

const signUpSuccess = function () {
  console.log('Signed Up Successfully')
  $('#sign-in-message').text('Signed Up Successfully')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('.when-signed-in').show()
  $('#sign-in-message').text('Signed In Successfully')
  $('#when-not-signed-in').hide()
  console.log('Signed In Successfully')
}

const changePasswordSuccess = function () {
  console.log('Password changed')
}

const signOutSuccess = function () {
  store.user = null
  console.log('Signed out successfully')
}
const authFailure = function () {
  console.log('Failure')
}

const failure = function () {
  console.error('Failure')
}

module.exports = {
  failure,
  signInSuccess,
  signUpSuccess,
  signOutSuccess,
  changePasswordSuccess,
  authFailure
}
