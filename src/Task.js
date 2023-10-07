export default class Task {
    constructor(title, description = '', dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    get taskTitle() {
        return this.title;
    }

    checkPriority(priority) {
        let backgroundColor;

        if(priority === "High") {
            backgroundColor = '#F63131';
        }else if(priority === "Low") {
            backgroundColor = 'green';
        }else {
            backgroundColor = 'orange';
        }
        return backgroundColor;
    }
}