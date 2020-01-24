const knex = require('knex');

const db = require('../data/dbConfig.js')

module.exports = {
    addResource,
    getResource,
    addProject,
    getProject,
    addTask,
    getTask
}

function addResource(resource){
    return db('resources')
    .insert(resource, 'id')
    .then(ids => ({ id: ids[0] }))
}

function getResource(){
    return db('resources')
}

function addProject(project){
    return db('projects')
    .insert(project, 'id')
    .then(ids => ({ id: ids[0] }))
}

function getProject(){
    return db('projects')
}

function addTask(task){
    return db('tasks')
    .insert(task, 'id')
    .then(ids => ({ id: ids[0] }))
}

function getTask(){
    return db('tasks')
    .join('projects', 'tasks.project_id', 'projects.id')
    .select('projects.project_name', 'projects.project_desc', 'tasks.task_desc', 'tasks.notes', 'tasks.completed')
}