'use strict'
const config = require('../config')

const upload = function (formData) {
  return $.ajax({
    url: `${config.apiUrl}/fileUploads`,
    method: 'POST',
    data: formData,
    contentType: false,
    processData: false
  })
}

module.exports = {
  upload
}
