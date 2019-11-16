'use strict'
const config = require('../config')

// Send form data to the back end where it will be processed and uploaded to AWS
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
