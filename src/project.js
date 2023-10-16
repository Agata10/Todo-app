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
        if(this.tasks.some((p) => p.title === task.title)){
            return;
        }
        return this.tasks.push(task);
    }

    getTask(taskTitle) {
        return this.tasks.find(tasks => tasks.title === taskTitle);
    }
    
    editTask(title, newTitle, description, dueDate, priority) {
       const task = this.getTask(title);
       if(task){
        task.title = newTitle;
        task.description = description;
        task.dueDate = dueDate;
        task.priority = priority;
        return task;
       }
    }

    removeTask(taskTitle) {
        this.tasks.filter((task, index) => {
            if (task.taskTitle === taskTitle) {
                return this.tasks.splice(index, 1);
            }
        });

    

    }



}