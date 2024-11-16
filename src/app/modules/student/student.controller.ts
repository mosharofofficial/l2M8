import { Request, Response } from 'express';
import { studentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const {student:studentData} = req.body;
    //call service function
    const result = await studentServices.createStudentIntoDB(studentData);
    res.status(200).json({
      success: true,
      message: 'Student created',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllStudents = async (req:Request, res:Response) => {
  try {
    const result = await studentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'Students data retrieved',
      data: result,
    });
  } catch (error) {
    console.log(error)
  }
}

const getStudentById = async (req:Request, res:Response) => {
  try {

    const id = req.params.id;
    const result = await studentServices.getOneStudentFromDB(id);
    res.status(200).json({
      success: true,
      message: 'Student data retrieved',
      data: result,
    });
    
  } catch (error) {
    console.log(error)
  }
}

export const studentControllers = {
  createStudent,
  getAllStudents,
  getStudentById,
};
