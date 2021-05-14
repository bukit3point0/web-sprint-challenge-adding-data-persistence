const express = require("express");

const ResourcesRouter = require('./resource/router')
const ProjectsRouter = require('./project/router')
const TasksRouter = require('./task/router')

const server = express();

server.use(express.json());

server.use('/api/resources', ResourcesRouter)
server.use('/api/projects', ProjectsRouter)
server.use('/api/tasks', TasksRouter)

server.get("/", (req, res) => {
    res.status(200).json({ api: "up" })
})

module.exports = server;