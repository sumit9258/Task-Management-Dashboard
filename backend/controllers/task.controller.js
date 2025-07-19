import Task from '../models/task.model.js';

export const addTask = async (req, res) => {
    try {
        const {title, description, status, priority} = req.body;
        if (!title) {
            return res.status(400).json({error: 'Title is required'});
        }
        if (description && description.length < 10) {
            return res.status(400).json({error: 'Description must be at least 10 characters'});
        }
        const task = new Task({title, description, status, priority});
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({error: 'Failed to create task'});
    }
}
export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch tasks'});
    }
}
export const updateTask = async (req, res) => {
    try {
        const {id} = req.params;
        const {title, description, status, priority} = req.body;
        const task = await Task.findByIdAndUpdate(id, {title, description, status, priority}, {new: true});
        if (!task) {
            return res.status(404).json({error: 'Task not found'});
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({error: 'Failed to update task'});
    }
}
export const deleteTask = async (req, res) => {
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndDelete(id);
        if (!task) {
            return res.status(404).json({error: 'Task not found'});
        }
        res.status(200).json({message: 'Task deleted successfully'});
    } catch (error) {   
        res.status(500).json({error: 'Failed to delete task'});
    }
}
export const getTaskById = async (req, res) => {
    try {
        const {id} = req.params;
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).json({error: 'Task not found'});
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch task'});
    }
}
export const getTasksByStatus = async (req, res) => {
    try {
        const {status} = req.params;
        const tasks = await Task.find({status});
        if (tasks.length === 0) {
            return res.status(404).json({error: 'No tasks found with this status'});
        }
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch tasks by status'});
    }
}
export const getTasksByPriority = async (req, res) => {
    try {
        const {priority} = req.params;
        const tasks = await Task.find({priority});
        if (tasks.length === 0) {
            return res.status(404).json({error: 'No tasks found with this priority'});
        }
        res.status(200).json(tasks);
    } catch (error) {   
        res.status(500).json({error: 'Failed to fetch tasks by priority'});
    }
}
export const getTasksByTitle = async (req, res) => {
    try {
        const {title} = req.params;
        const tasks = await Task.find({title});
        if (tasks.length === 0) {
            return res.status(404).json({error: 'No tasks found with this title'});
        }
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch tasks by title'});
    }
}
