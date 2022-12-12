class User {
    private name: string;
    private email: string;
    private password: string;
    private address: string;
    constructor(name: string, email: string, password: string, address: string) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.address = address;
    }
    getName(): string {
        return this.name;
    }
    getEmail(): string {
        return this.email;
    }
    getAddress(): string {
        return this.address;
    }
}
export default User;