const router = require('express').Router()
const {logger, checkResourcePayload} = require('./middleware')
const Resources = require('./model')

// [ ] [GET] /api/resources
router.get('/', logger, (req, res, next) => {
    Resources.getAll(req.query)
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(err => next())
})

// [ ] [POST] /api/resources
router.post('/', logger, checkResourcePayload, (req, res, next) => {
    Resources.addResource(req.body)
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(next)
})
//   Example of response body: {"resource_id":1,"resource_name":"foo","resource_description":null}

module.exports = router