class Intern {
    constructor(name, id, title, school) {
        super(name, id, title);
        this.school = school;
    }
    getSchool() {
        // Grab school from inquirer
    }
    getRole() {
        return 'Intern';
    }
}