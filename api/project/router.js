const router = require('express').Router()
const {logger, checkProjectPayload} = require('./middleware')
const Projects = require('./model')

// [ ] [GET] /api/projects
router.get('/', logger, (req, res) => {
    Projects.getAll(req.query)
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => next())
})
//   Even though project_completed is stored as an integer, the API uses booleans when interacting with the client
//   Example of response body: [{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]

// [ ] [POST] /api/projects
router.post('/', logger, checkProjectPayload, (req, res, next) => {
    Projects.addProject(req.body)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(next)
})
//   Even though project_completed is stored as an integer, the API uses booleans when interacting with the client
//   Example of response body: {"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}

module.exports = router