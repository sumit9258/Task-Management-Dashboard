import express from "express";
import { addTask, getTasks, updateTask, deleteTask, getTaskById, getTasksByStatus, getTasksByPriority, getTasksByTitle } from "../controllers/task.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

//http://locahost:3000/api/task/add
router.post('/add', authMiddleware, addTask);
//http://locahost:3000/api/task/get
router.get('/get', authMiddleware, getTasks);
//http://locahost:3000/api/task/update/:id
router.put('/update/:id', authMiddleware, updateTask);
//http://locahost:3000/api/task/delete/:id
router.delete('/delete/:id', authMiddleware, deleteTask);
//http://locahost:3000/api/task/get/:id
router.get('/get/:id', authMiddleware, getTaskById);
//http://locahost:3000/api/task/status/:status
router.get('/status/:status', authMiddleware, getTasksByStatus);
//http://locahost:3000/api/task/priority/:priority
router.get('/priority/:priority', authMiddleware, getTasksByPriority);
//http://locahost:3000/api/task/title/:title
router.get('/title/:title', authMiddleware, getTasksByTitle);


export default router;