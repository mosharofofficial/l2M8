import { model, Schema } from 'mongoose';
import { Guardian, Name, Student } from './student.interface';

const guardianSchema = new Schema<Guardian>({
  name: { type: String, required: true },
  contactNo: { type: String, required: true },
  occupation: { type: String, required: true },
});

const nameSchema = new Schema<Name>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: nameSchema,
  email: { type: String, required: true },
  gender: ['male', 'female'],
  dateOfBirth: { type: String },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: guardianSchema,
  profileImg: { type: String },
  isActive: ['active', 'blocked'],
});

export const StudentModel = model('Student', studentSchema);
