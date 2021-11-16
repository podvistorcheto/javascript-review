const Task = require('../models/task');
const getAllTasks = async function (request, response) {
    // response.send('Getting all tasks from the file ....//')
    try {
        const tasks = await Task.find({})
        response.status(200).json({ tasks });
    }
    catch (error) {
        response.status(500).json({ msg: error })
    }
}

const createNewTask = async function (request, response) {
    // response.send('create task');
    // response.send(request.body);
    try {
        const saveNewTask = await Task.create(request.body)
        response.status(201).json({ saveNewTask });
    }
    catch (error) {
        response.status(500).json({ msg: error })
    }
}

const getTask = async function (request, response) {
    // response.send('get single task');
        // response.json({id: request.params.id})
    try {
        const {id: taskID} = request.params;
        const task = await Task.findOne({_id:taskID});
        if (!task){
            return response.status(404).json({ msg: `No task with id: ${taskID}`})
        }
    response.status(200).json({ task });
    } catch (error) {
        response.status(500).json({ msg: error })
    }
}


const deleteTask = async function (request, response) {
    // response.send('Delete task')
    try {
        const {id: taskID} = request.params;
        const task = await Task.findOneAndDelete({_id:taskID});
        if (!task){
            return response.status(404).json({ msg: `No task with id: ${taskID}`})
        }
    response.status(200).json({ task });
    } catch (error) {
        response.status(500).json({ msg: error })
    }
}

const updateTask = async function (request, response) {
    // response.send('Update task')
    try {
        const {id: taskID} = request.params;
        const task = await Task.findOneAndUpdate({_id:taskID}, request.body,{
            new: true,
            runValidators: true,
        });
        if (!task){
            return response.status(404).json({ msg: `No task with id: ${taskID}`})
        }
        response.status(200).json({ id:taskID, data: request.body });
    } catch (error) {
        response.status(500).json({ msg: error })
    }
}

module.exports = {
    getAllTasks, createNewTask, getTask, updateTask, deleteTask
}