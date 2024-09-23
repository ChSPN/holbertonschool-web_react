// Define the Teacher interface
interface Teacher {
    firstName: string; // can only be set during initialization
    lastName: string;  // can only be set during initialization


    yearsOfExperience?: number; // optional property
    location: string;
    location: string;
    fullTimeEmployee: boolean;
    // Index signature to allow any additional properties
    [key: string]: any;
  }
  
  // Create a Teacher object
  const teacher1: Teacher = {
    firstName: "Alice",
    lastName: "Johnson",
    fullTimeEmployee: true,
    location: "New York",
    contract: true, // adding an additional property
    subject: "Mathematics" // another additional property
  };
  
  // Create another Teacher object
  const teacher2: Teacher = {
    firstName: "Bob",
    lastName: "Smith",
    fullTimeEmployee: false,
    location: "California",
    yearsOfExperience: 5, // optional property
    contract: false, // adding an additional property
  };
  
  // Function to log teacher details
  function logTeacherDetails(teacher: Teacher): void {
    console.log(`Teacher: ${teacher.firstName} ${teacher.lastName}`);
    console.log(`Full-time: ${teacher.fullTimeEmployee}`);
    console.log(`Location: ${teacher.location}`);
    if (teacher.yearsOfExperience) {
      console.log(`Years of Experience: ${teacher.yearsOfExperience}`);
    }
    // Log additional properties
    for (const key in teacher) {
      if (!['firstName', 'lastName', 'fullTimeEmployee', 'yearsOfExperience', 'location'].includes(key)) {
        console.log(`${key}: ${teacher[key]}`);
      }
    }
  }
  
  // Log details of both teachers
  logTeacherDetails(teacher1);
  logTeacherDetails(teacher2);
  
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  
  console.log(director1);
  