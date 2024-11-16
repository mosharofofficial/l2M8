import express from 'express';
import { studentControllers } from './student.controller';

const router = express.Router();

//line below calls controller function:
router.post('/create-student', studentControllers.createStudent);

router.get('/', studentControllers.getAllStudents);

router.get('/:id', studentControllers.getStudentById);


export const StudentRoutes = router;
