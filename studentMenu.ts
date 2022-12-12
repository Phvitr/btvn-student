import {Student} from "./student";
import {StudentManager} from "./studentManager";

export class StudentMenu {
    studentManager: StudentManager;
    private menu = `
    1. Show student list
    2. Create new Student
    3. Update Student
    4. Delete Student
    5. Student statistics    
    6. Exit
    `
    constructor() {
    this.studentManager = new StudentManager()}
}
