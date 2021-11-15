require('./db/connect');
const express = require('express');
const app =  express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config()


// middleware
app.use(express.json())

// routes
const port = 3000;
app.get('/hello', function (request, response) {
    response.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)

// planning the routing
// app.get('/api/v1/tasks') to get all the tasks
// app.post('/api/v1/tasks') to create a new task
// app.get('/api/v1/tasks/:id) - get single task
// app.patch('/api/v1/tasks/:id') to update a task
// app.delete('/api/v1/tasks/:id) to delete task

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log('Server is listening at port 3000 ...'));
    } catch (error) {
        console.log(error);
    }
}

start();