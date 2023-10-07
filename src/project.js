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

    addTask({title, description, dueDate, priority}) {
        this.tasks.push({title, description, dueDate, priority});
    }

    removeTask(title) {
        this.tasks.filter((task, index) => {
            if (task.title === title) {
                return this.tasks.splice(index, 1);
            }
        });
    }
        

}