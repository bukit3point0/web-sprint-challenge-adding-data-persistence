const router = require('express').Router()
const {logger, checkTaskPayload} = require('./middleware')
const Tasks = require('./model')


// [ ] [GET] /api/tasks
router.get('/', logger, (req, res, next) => {
    Tasks.getAll(req.query)
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(err => next())
})
//   Even though task_completed is stored as an integer, the API uses booleans when interacting with the client
//   Each task must include project_name and project_description
//   Example of response body: [{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]

// [ ] [POST] /api/tasks
router.post('/', logger, checkTaskPayload, (req, res, next) => {
    Tasks.addTask(req.body)
    .then(task => {
        res.status(200).json(task)
    })
    .catch(next)
})
//   Even though task_completed is stored as an integer, the API uses booleans when interacting with the client
//   Example of response body: {"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}

module.exports = router