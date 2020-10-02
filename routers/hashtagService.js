var express = require('express');
var router = express.Router()
const api = require('../controller/ApiValidator')
const isAuthorized = require('../controller/requestAuthenticator');

const BASE_URL = 'http://localhost:8088'
const apiValidator = api(BASE_URL)

router.get('/hashtags', isAuthorized, apiValidator, (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
})

router.get('/hashtags/:name', isAuthorized, apiValidator, (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
})

module.exports = router