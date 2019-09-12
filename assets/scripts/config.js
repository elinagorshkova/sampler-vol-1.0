'use strict'

let apiUrl
const apiUrls = {
  production: '<https://obscure-coast-53043.herokuapp.com>',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
