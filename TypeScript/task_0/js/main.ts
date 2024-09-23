// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two students
  const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
  };
  
  const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "San Francisco"
  };
  
  // Store them in an array
  const studentsList: Student[] = [student1, student2];
  
  // Function to render the table
  function renderTable(students: Student[]): void {
    // Create a table element
    const table = document.createElement('table');
  
    // Iterate over the students array and append a new row for each student
    students.forEach(student => {
      const row = table.insertRow();
  
      // Add firstName cell
      const firstNameCell = row.insertCell();
      firstNameCell.textContent = student.firstName;
  
      // Add location cell
      const locationCell = row.insertCell();
      locationCell.textContent = student.location;
    });
  
    // Append the table to the body (or any specific element)
    document.body.appendChild(table);
  }
  
  // Call the function to render the table
  renderTable(studentsList);
  