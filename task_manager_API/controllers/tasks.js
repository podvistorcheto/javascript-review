const Task = require('../models/task');
const asyncWrapper = require('../middleware/async')


const getAllTasks = asyncWrapper(async function (request, response) {
    // response.send('Getting all tasks from the file ....//')
    // try {
    //     const tasks = await Task.find({})
    //     response.status(200).json({ tasks });
    //     // response.status(200).json({ tasks, amount: tasks.length })
    //     // response.status(200).json({ success: true, status: "success", data: {tasks, nbHits: tasks.length }})
    // }
    // catch (error) {
    //     response.status(500).json({ msg: error })
    // }
    const tasks = await Task.find({})
    response.status(200).json({ tasks });
})

const createNewTask = asyncWrapper(async function (request, response) {
    // response.send('create task');
    // response.send(request.body);
    // try {
    //     const saveNewTask = await Task.create(request.body)
    //     response.status(201).json({ saveNewTask });
    // }
    // catch (error) {
    //     response.status(500).json({ msg: error })
    // }
    const saveNewTask = await Task.create(request.body)
    response.status(201).json({ saveNewTask });
})

const getTask = asyncWrapper(async function (request, response) {
    // response.send('get single task');
    // response.json({id: request.params.id})
    // try {
    //     const {id: taskID} = request.params;
    //     const task = await Task.findOne({_id:taskID});
    //     if (!task){
    //         return response.status(404).json({ msg: `No task with id: ${taskID}`})
    //     }
    // response.status(200).json({ task });
    // } catch (error) {
    //     response.status(500).json({ msg: error })
    // }
    const {id:taskID} = request.params;
    const task = await Task.findOne({_id:taskID});
    if (!task){
        return response.status(404).json({ msg: `No task with id: ${taskID}`})
    }

    response.status(200).json({ task });
})


const deleteTask = asyncWrapper(async function (request, response) {
    // response.send('Delete task')
    // try {
    //     const {id: taskID} = request.params;
    //     const task = await Task.findOneAndDelete({_id:taskID});
    //     if (!task){
    //         return response.status(404).json({ msg: `No task with id: ${taskID}`})
    //     }
    // response.status(200).json({ task });
    // } catch (error) {
    //     response.status(500).json({ msg: error })
    // }
    const {id: taskID} = request.params;
    const task = await Task.findOneAndDelete({_id:taskID});
    if (!task){
        return response.status(404).json({ msg: `No task with id: ${taskID}`})
    }

    response.status(200).json({ task });
})

const updateTask = asyncWrapper(async function (request, response) {
    // response.send('Update task')
    // try {
    //     const {id: taskID} = request.params;
    //     const task = await Task.findOneAndUpdate({_id:taskID}, request.body,{
    //         new: true,
    //         runValidators: true,
    //     });
    //     if (!task){
    //         return response.status(404).json({ msg: `No task with id: ${taskID}`})
    //     }
    //     response.status(200).json({ id:taskID, data: request.body });
    // } catch (error) {
    //     response.status(500).json({ msg: error })
    // }
    const {id: taskID} = request.params;
    const task = await Task.findOneAndUpdate({_id:taskID}, request.body,{
            new: true,
            runValidators: true,
        });
        if (!task){
            return response.status(404).json({ msg: `No task with id: ${taskID}`})
        }
        
        response.status(200).json({ id:taskID, data: request.body });
})

module.exports = {
    getAllTasks, createNewTask, getTask, updateTask, deleteTask
}