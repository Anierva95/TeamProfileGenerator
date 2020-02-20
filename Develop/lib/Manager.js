class Manager {
    constructor(name, id, title, officeNumber) {
        super(name, id, title);
        this.officeNumber = officeNumber;
    }
    getGithub() {
        // Grab github from inquirer
    }
    getRole() {
        return 'Manager';
    }
}