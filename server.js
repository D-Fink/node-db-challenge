const express = require('express');

const server = express();

const Hubs = require('./hubs/project-model.js')

server.use(express.json());
//ok
server.get('/api/projects', (req, res) => {
    Hubs.getProject()
    .then(projects => {
        res.json(projects)
    })
    .catch(err => {
        res.status(500).json({message: 'nope'})
    })
})
//ok
server.get('/api/resources', (req, res) => {
    Hubs.getResource()
    .then(resources => {
        res.json(resources)
    })
    .catch(err => {
        res.status(500).json({message: 'nope'})
    })
})
//ok
server.get('/api/tasks', (req, res) => {
    Hubs.getTask()
    .then(tasks => {
        res.json(tasks)
    })
    .catch(err => {
        res.status(500).json({message: 'nope'})
    })
})
//ok
server.post('/api/projects', (req, res) => {
    Hubs.addProject(req.body)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(err => {
        res.status(500).json({message: 'nope'})
    })
})
//ok
server.post('/api/resources', (req, res) => {
    Hubs.addResource(req.body)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(err => {
        res.status(500).json({message: 'nope'})
    })
})
//ok
server.post('/api/tasks', (req, res) => {
    Hubs.addTask(req.body)
    .then(tasks => {
        res.status(201).json(tasks)
    })
    .catch(err => {
        res.status(500).json({message: 'nope'})
    })
})

module.exports = server