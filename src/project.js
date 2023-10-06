export default class Project {
    constructor(title) {
        this.title = title;
        this.tasks = [];
    }

    get projectTitle() {
        return this.title;
    }

    set projectTitle(name) {
        this.title = name;
    }


}