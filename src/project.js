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
        return this.tasks.push(task);
    }

    removeTask(taskTitle) {
        this.tasks.filter((task, index) => {
            if (task.taskTitle === taskTitle) {
                return this.tasks.splice(index, 1);
            }
        });


    }



}