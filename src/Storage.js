

export function setTodoInLocalStorage(todo) {
    localStorage.setItem('todo', JSON.stringify(todo));
}

export function removeProjectFromLocalStroage(title) {
    let todo = JSON.parse(localStorage.getItem('todo'));
   
    for (let i = 0; i < todo.projects.length; i++) {
        if (todo.projects[i].title === title) {
            todo.projects.splice(i, 1);
        }
    }
    todo = JSON.stringify(todo);
    localStorage.setItem('todo', todo);
}

export function removeTaskFromLocalStorage(currentProjectName, taskName) {
    let todo = JSON.parse(localStorage.getItem('todo'));
   
    for (let i = 0; i < todo.projects.length; i++) {
        if (todo.projects[i].title === currentProjectName) {
            let project = todo.projects[i];
            for(let j = 0; j < project.tasks.length; j++) {
                if(project.tasks[j].title === taskName) {
                    project.tasks.splice(j, 1);
                }
            }
        }
    }
    todo = JSON.stringify(todo);
    window.localStorage.setItem('todo', todo);
}

export function getProjectsFromLocalStroage() {
    let todo = JSON.parse(localStorage.getItem('todo')) || [];
    return todo;
}

// export function getTasksFromLocalStroage(currentProjectName) {
//     let todo = JSON.parse(localStorage.getItem('todo')) || [];

//     for (let i = 0; i < todo.projects.length; i++) {
//         if (todo.projects[i].title === currentProjectName) {
//             let project = todo.projects[i];
//                 return project.tasks;
//                 }
//         }
       
    
// }
