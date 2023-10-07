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

    getTasks() {
        return this.tasks;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(title) {
        this.tasks.filter((task, index) => {
            if (task.title === title) {
                return this.tasks.splice(index, 1);
            }
        });
    }
        

}