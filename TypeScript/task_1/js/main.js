// Create a Teacher object
var teacher1 = {
    firstName: "Alice",
    lastName: "Johnson",
    fullTimeEmployee: true,
    location: "New York",
    contract: true,
    subject: "Mathematics" // another additional property
};
// Create another Teacher object
var teacher2 = {
    firstName: "Bob",
    lastName: "Smith",
    fullTimeEmployee: false,
    location: "California",
    yearsOfExperience: 5,
    contract: false
};
// Function to log teacher details
function logTeacherDetails(teacher) {
    console.log("Teacher: ".concat(teacher.firstName, " ").concat(teacher.lastName));
    console.log("Full-time: ".concat(teacher.fullTimeEmployee));
    console.log("Location: ".concat(teacher.location));
    if (teacher.yearsOfExperience) {
        console.log("Years of Experience: ".concat(teacher.yearsOfExperience));
    }
    // Log additional properties
    for (var key in teacher) {
        if (!['firstName', 'lastName', 'fullTimeEmployee', 'yearsOfExperience', 'location'].includes(key)) {
            console.log("".concat(key, ": ").concat(teacher[key]));
        }
    }
}
// Log details of both teachers
logTeacherDetails(teacher1);
logTeacherDetails(teacher2);
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17
};
console.log(director1);
// Implement the printTeacher function
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName[0], ". ").concat(lastName);
};
// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe
// Implémentation de la classe StudentClass
var StudentClass = /** @class */ (function () {
    function StudentClass(_a) {
        var firstName = _a.firstName, lastName = _a.lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
// Exemple d'utilisation de la classe StudentClass
var student = new StudentClass({ firstName: "John", lastName: "Doe" });
console.log(student.workOnHomework()); // Affiche "Currently working"
console.log(student.displayName()); // Affiche "John"
