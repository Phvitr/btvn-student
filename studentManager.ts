import {Student} from "./student"
export class StudentManager {
    private students = [];

    constructor() {
    }
    display(){
        return this.students;
    }
    set add(student){
        this.students.push(student);
    }
    findCode(code:number) {
        for (let i = 0; i < this.students.length;i++) {
            if (this.students[i].getCode() == code) {
                return i;
            }
        }
        return -1;
    }
    remove(code:number) {
        let index = this.students.indexOf(code);
        if (index == -1) {
            console.log("khong co sinh vien nay");
        }else {
            this.students.splice(index, 1);
            console.log("da xoa thanh cong");
        }
    }

    edit(code:number, student:Student) {
        let index = this.findCode(code);
        if (index == -1) {
            console.log("khong co sinh vien nay");
        }else {
            this.students[index]=(new Student('Hung','hung@mail.com' ,'abc123','hanoi','1',3.1,1));
            console.log("da sua thang cong");
        }
    }
    statistic(gpa:number) {
        let Y = 0;
        let K = 0;
        let G = 0;
        for (let i = 0; i < this.students.length;i++) {
            if (this.students[i].getGpa()>0 && this.students[i].getGpa()< 6.5){
                Y++;
            }else if (this.students[i].getGpa() >= 6.5 && this.students[i].getGpa() < 8){
                K++;
            }else {
                G++;
            }

        }
        console.log('So hoc sinh yeu: ' + Y + 'So hoc sinh kha: ' + K + 'So hoc sinh gioi: ' + G);
    }

}