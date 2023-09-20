export default class Project {
    constructor(name){
        this.name = name;
        this.arrOfTasks = [];
    }

    setName(value) {
        this.name = value;
    }

    getName() {
        return this.name;
    }

    setArrOfTasks(tasks){
       this.arrOfTasks = tasks;
    }

    getArrOfTasks() {
        return this.arrOfTasks;
    }

    getTask(taskName) {
        return this.arrOfTasks.find(task => task.name === taskName);
    }

    isTaskNameTaken(taskName) {
         return this.arrOfTasks.some(task => task.name === taskName);
    }

    addTask(task) {
        return this.arrOfTasks.push(task);
    }

}

// export default function createProjects() {
//     let project = new Project('Gym');
//     console.log(project.getName());

//     project.setArrOfTasks( [{name:'Do abs', description:'', priority:'High'},{name:'Do abs', description:'', priority:'Low'}]);
//     console.log(project.getArrOfTasks())

//     let secTask = ({name:'Do sth', description:'', priority:'Low'});
//     if(project.isTaskNameTaken(secTask.name) === false){
//         project.addTask(secTask);
//     }
    
//     console.log(project.getArrOfTasks());
//     let task = project.getTask('Do abs')
//     console.log(task.name)
    
   
// }
