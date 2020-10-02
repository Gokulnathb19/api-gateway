var express = require('express');
var router = express.Router()
const api = require('../controller/ApiValidator')
const isAuthorized = require('../controller/requestAuthenticator')

const BASE_URL = 'http://localhost:8000'
const apiValidator = api(BASE_URL);

router.get('/feeds', isAuthorized, apiValidator, (req, res) => {
  req.api.get(req.path).then(resp => {
    res.send(resp.data)
  })
})

router.get('/feeds/:hashtag', isAuthorized, apiValidator, (req, res) => {
  req.api.get(req.path).then(resp => {
    res.send(resp.data)
  })
})

router.post('/feeds', isAuthorized, apiValidator, (req, res) => {
  req.api.post(req.path, req.body).then(resp => {
    res.send(resp.data)
  })
})

module.exports = router