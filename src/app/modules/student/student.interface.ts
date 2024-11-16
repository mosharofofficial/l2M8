
export interface Guardian {
  name: string;
  contactNo: string;
  occupation: string;
}

// export interface LocalGuardian {
//   name: string;
//   occupation: string;
//   contactNo: string;
//   address: string;
// }
export interface Name  {
    firstName: string;
    lastName: string;
  };

export interface Student {
  id: string;
  name: Name;
  email: string;
  gender: 'male' | 'female';
  dateOfBirth: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress:string;
  permanentAddress:string;
  guardian: Guardian;
  profileImg?: string;
  isActive:"active"|"blocked";
}
