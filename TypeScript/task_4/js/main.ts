// Importer les modules nécessaires
import { Subject } from './subjects/Subject';
import { Teacher } from './subjects/Teacher';
import { Cpp } from './subjects/Cpp';
import { Java } from './subjects/Java';
import { React } from './subjects/React';

// Exemple d'utilisation des classes et interfaces
const cppTeacher: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingC: 10
};

const cpp = new Cpp();
cpp.setTeacher(cppTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

const javaTeacher: Teacher = {
    firstName: 'Jane',
    lastName: 'Smith',
    experienceTeachingJava: 5
};

const java = new Java();
java.setTeacher(javaTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

const reactTeacher: Teacher = {
    firstName: 'Alice',
    lastName: 'Johnson',
    experienceTeachingReact: 3
};

const react = new React();
react.setTeacher(reactTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
