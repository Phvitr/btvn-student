import User from "./user";

export class Student extends User {
    private group: string;
    gpa: number;
    private code: number;

    constructor(name: string, email: string, password: string, address: string, group: string, gpa: number, code: number) {
        super(name,email,password,address);
        this.group = group;
        this.gpa = gpa;
        this.code = code;
    }
    getGroup(): string {
        return this.group;
    }
    getGpa(): number {
        return this.gpa;
    }
    getCode(): number {
        return this.code;
    }
}