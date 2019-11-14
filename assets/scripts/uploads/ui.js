'use strict'

const uploadSucces = function (data) {
  $('.display').html(`<img src="${data.fileUpload.url}">`)
  console.log('Success')
}

module.exports = {
  uploadSucces
}
