// const Task = require('../models/task');
const getAllTasks = function (request, response) {
    response.send('Getting all tasks from the file ....//')
}

const createNewTask = function (request, response) {
    response.send(request.body);
    // try {
    //     const saveNewTask = await Task.create(request.body)
    //     response.status(201).json({ saveNewTask });
    // }
    // catch (error) {
    //     response.status(500).json({ msg: error })
    // }
}

const getTask = function (request, response) {
    response.json({id: request.params.id})
}

const updateTask = function (request, response) {
    response.send('Update task')
}

const deleteTask = function (request, response) {
    response.send('Delete task')
}

module.exports = {
    getAllTasks, createNewTask, getTask, updateTask, deleteTask
}