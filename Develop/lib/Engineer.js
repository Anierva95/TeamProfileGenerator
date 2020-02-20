class Engineer {
    constructor(name, id, title, github) {
        super(name, id, title);
        this.github = github;
    }
    getGithub() {
        // Grab github from inquirer
    }
    getRole() {
        return 'Engineer';
    }
}