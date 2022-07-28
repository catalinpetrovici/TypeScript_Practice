import express, { Router } from 'express';
import { createTodo, getTodos } from '../controllers/todosControllers';

const router = express.Router();

router.post('/', createTodo);
router.get('/', getTodos);
router.patch('/:id');
router.delete('/:id');

export default router;
