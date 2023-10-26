import Project from "./project";
import Todo from "./Todo";
import Task from "./Task";
import { setTodoInLocalStorage, removeProjectFromLocalStroage, removeTaskFromLocalStorage, getProjectsFromLocalStroage, getTasksFromLocalStroage } from "./Storage";

function showProjectForm() {
    const form = document.getElementById('project-form');
    form.classList.remove('hidden');
    form.classList.add('active');
}

function cancelProjectForm(e) {
    e.preventDefault();
    const form = document.getElementById('project-form');
    form.classList.add('hidden');
    form.classList.remove('active');
}

function addProject(e) {
    e.preventDefault();
    const titleInput = document.getElementById('project-input');
    let todo = e.currentTarget.todo;

    if (todo.getProject(titleInput.value.charAt(0).toUpperCase() + titleInput.value.slice(1).toLowerCase())) {
        alert('The project with this name already exists!');
        return;
    }

    const newProject = new Project(titleInput.value.charAt(0).toUpperCase() + titleInput.value.slice(1).toLowerCase());
    appendNewProject(newProject.projectTitle);
    todo.addProject(newProject); //add project to Todo
    updateProjectsScreen(newProject.projectTitle); //switch to new project
    updateTasksScreen(todo);
    setTodoInLocalStorage(todo);

}

function appendNewProject(title) {
    const form = document.getElementById('project-form');
    const projectsList = document.querySelector('.projects-list');
    const li = document.createElement('li');
    const span = document.createElement('span');

    li.textContent = title;
    span.textContent = 'x';
    li.appendChild(span);
    projectsList.appendChild(li);
    form.classList.add('hidden');
    form.classList.remove('active');
}


function deleteProject(e) {
    if (e.target.tagName == 'SPAN') {
        let span = e.target, li = span.parentNode, ul = li.parentNode;
        let projectName = li.textContent.replace('x', '');
        e.currentTarget.todo.removeProject(projectName);
        ul.removeChild(li);
        console.log(e.currentTarget.todo.getProjects()); /// delte later
        inititializeProject(e.currentTarget.todo);
        updateTasksScreen(e.currentTarget.todo);
        removeProjectFromLocalStroage(projectName);
    }
}

function updateProjectsScreen(title) {
    const listOfProject = document.querySelector('.projects-list');
    const projects = listOfProject.childNodes;

    for (let i = 0; i < projects.length; i++) {
        if (projects[i].textContent.replace('x', '') == title) {
            projects[i].classList.add('activeProject');
            projects[i].classList.remove('disactiveProject');
        } else {
            projects[i].classList.add('disactiveProject');
            projects[i].classList.remove('activeProject');
        }
    }
}

function inititializeProject(todo) {
    if ((todo.getProjects().length == 0)) {
        return;
    } else if (todo.getProjects()[0].title != '') {
        let title = todo.getProjects()[0].title;
        updateProjectsScreen(title);
    }
}

function handleProjectClick(todo) {
    const listOfProject = document.querySelector('.projects-list');
    listOfProject.addEventListener('click', (e) => {
        if (e.target.tagName == 'LI') {
            let title = e.target.textContent.replace('x', '');
            updateProjectsScreen(title);
            updateTasksScreen(todo);
        }
    });
}

function getCurrentProject(todo) {
    const listOfProject = document.querySelector('.projects-list');
    const li = listOfProject.childNodes;
    let title;
    let currentProject;

    for (let i = 0; i < li.length; i++) {
        if (li[i].classList.contains('activeProject')) {
            title = li[i].textContent.replace('x', '');
            currentProject = todo.getProject(title);
            return currentProject;

        }
    }
}

function showHideDescriptionOnClick(e) {

    if (e.target.tagName == 'DIV') {
        if (e.target.classList.contains('title') ||
            e.target.classList.contains('description')) {
            const container = e.target.parentNode;
            const descriptionDiv = container.querySelector('.description');
            console.log(e.target)
            if (descriptionDiv.classList.contains('hidden')) {
                descriptionDiv.classList.remove('hidden');
            } else {
                descriptionDiv.classList.add('hidden');
            }
        }
    }
}

function getTaskfromInput() {
    const title = document.getElementById('title-input').value;
    const description = document.getElementById('description-input').value;
    const dueDate = document.getElementById('date-input').value;
    const priority = document.getElementById('priority-select').value;

    let task = { title, description, dueDate, priority };
    return task;
}

function appendTask(task) {
    const conatiner = document.querySelector('.todo-container');
    const todoContent = document.createElement('div');
    todoContent.classList.add('todo-content');

    todoContent.innerHTML = `<div id="priority"></div>
    <div id="info">
        <div class="title">`+ task.title + `</div>
        <div class="description" class="">`+ task.description + `</div>
    </div>
    <div class="editDiv"><button class="edit"></button></div>
    <div class="dateDiv">`+ task.dueDate + `</div>
    <div class="deleteDiv"><button class="delete"></button></div>`;

    todoContent.querySelector('#priority').style.backgroundColor = task.checkPriority(task.priority);
    conatiner.appendChild(todoContent);
}

function showAddTodoDialog() {
    const dialog = document.getElementById('todoDialog');
    const confrimBtn = document.querySelector('.addBtn');
    const editBtn = document.querySelector('.editBtn');
    editBtn.classList.add('hidden');
    editBtn.disabled = true;
    confrimBtn.classList.remove('hidden');
    confrimBtn.disabled = false;
    const closeBtn = document.getElementById('closeBtn');
    dialog.showModal();

    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        dialog.close();
    });
}

function handleAddingTask(todo) {
    const dialog = document.getElementById('todoDialog');
    const form = dialog.querySelector('#todoForm');
    const listOfProject = document.querySelector('.projects-list');
    let li = listOfProject.childNodes;
    const editBtn = document.querySelector('.editBtn');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (editBtn.classList.contains('hidden')) {
            li.forEach((list) => {
                if (list.classList.contains('activeProject')) {
                    const currentProject = getCurrentProject(todo);
                    const input = getTaskfromInput();
                    const task = new Task(input.title.toLowerCase(), input.description, input.dueDate, input.priority);
                    if (currentProject.getTask(task.title.toLowerCase())) {
                        alert('Tasks can\'t have the same name');
                    }
                    currentProject.addTask(task);
                    updateTasksScreen(todo);
                    setTodoInLocalStorage(todo);

                }
                dialog.close();
            });
        }
    });
}

function deleteTask(e) {
    let currentProject = getCurrentProject(e.currentTarget.todo);

    if (e.target.tagName == 'BUTTON') {
        if (e.target.classList.contains('delete')) {
            const contentDiv = e.target.parentNode.parentNode, containerDiv = contentDiv.parentNode;
            const title = contentDiv.childNodes[2].childNodes[1].textContent;
            removeTaskFromLocalStorage(currentProject.title, title);
            currentProject.removeTask(title);
            containerDiv.removeChild(contentDiv);
        }
    }
}
function appendTaskInInput(task) {
    document.getElementById('title-input').value = task.title;
    document.getElementById('description-input').value = task.description;
    document.getElementById('date-input').value = task.dueDate;
    document.getElementById('priority-select').value = task.priority;
}

function editTodo(e, todo) {
    const dialog = document.getElementById('todoDialog');
    const form = dialog.querySelector('#todoForm');
    const closeBtn = document.getElementById('closeBtn');
    let clicked = false;

    if (e.target.tagName == 'BUTTON') {

        if (e.target.classList.contains('edit')) {
            let contentDiv = e.target.parentNode.parentNode;
            console.log(contentDiv)
            let titleDivs = contentDiv.querySelector('.title');
            let priorityDiv = contentDiv.querySelector('#priority');
            let descriptionDiv = contentDiv.querySelector('.description');
            let dueDateDiv = contentDiv.querySelector('.dateDiv');
         

            const confrimBtn = document.querySelector('.addBtn');
            const editBtn = document.querySelector('.editBtn');
            dialog.showModal();
            let currentProject = getCurrentProject(todo);
            editBtn.classList.remove('hidden');
            confrimBtn.classList.add('hidden');
            editBtn.disabled = false;
            confrimBtn.disabled = true;
            
            clicked = true;

            appendTaskInInput(currentProject.getTask(titleDivs.textContent));

            form.addEventListener('submit', (e) => {

                if (confrimBtn.classList.contains('hidden') && clicked) {
                    e.preventDefault();
                    const input = getTaskfromInput();

                    if (currentProject.getTask(titleDivs.textContent)) {
                        if (input.title != titleDivs.textContent) {
                            if (currentProject.getTask(input.title)) {
                                alert('Tasks can\'t have the same names!');
                                return;
                            }
                        }
                        let editedTask = currentProject.editTask(titleDivs.textContent, input.title, input.description, input.dueDate, input.priority);
                        titleDivs.textContent = input.title.toLowerCase();
                        descriptionDiv.textContent = input.description;
                        dueDateDiv.textContent = input.dueDate;
                        priorityDiv.style.backgroundColor = editedTask.checkPriority(input.priority);
                        setTodoInLocalStorage(todo);
                        clicked = false;
                    }
                    dialog.close();
                };
            });

            closeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                dialog.close();
            });
        }
    }
}

function updateTasksScreen(todo) {
    const container = document.querySelector('.todo-container');

    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }

    const currentProject = getCurrentProject(todo);
    if (currentProject) {
        let tasks = currentProject.getTasks();
        tasks.forEach((task) => appendTask(task));
    } else {
        return; //if project doesnt exists
    }

}

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}

export default function handleUI() {
    const addProjectBtn = document.querySelector('.add-project-btn');
    const cancelProjectBtn = document.getElementById('cancel-add-project');
    const form = document.getElementById('project-form');
    const addTodoBtn = document.querySelector('.add-todo-btn');
    const container = document.querySelector('.todo-container');

    let todo = new Todo();

    window.onload = function () {
        if (!localStorage.getItem('todo')) {

            todo.getProjects()[0].addTask(new Task('do laundry', 'or have no clothes to wear', '2023-10-25', 'High'));
            todo.getProjects()[0].addTask(new Task('do shopping', 'till friday', '2023-10-27', 'Medium'));
            todo.getProjects()[0].addTask(new Task('bake a birthday cake', 'for Josie', '2023-12-12', 'Low'));
            todo.getProjects()[1].addTask(new Task('change workout', 'figure out new routine', '2023-01-01', 'High'));
            setTodoInLocalStorage(todo);

        } else {

            todo.setProjects(getProjectsFromLocalStroage().projects);
            let projects = getProjectsFromLocalStroage().projects;
            todo.getProjects().forEach((project) => {
                projects.forEach((p) => {
                    if (project.title === p.title) {
                        p.tasks.forEach((task) => {
                            project.addTask(new Task(task.title, task.description, task.dueDate, task.priority));
                        });
                    }

                });
            });
        }
        todo.getProjects().forEach((project) => {
            appendNewProject(project.title);
        });
        inititializeProject(todo);
        updateTasksScreen(todo);
    }

    addProjectBtn.addEventListener('click', showProjectForm);
    cancelProjectBtn.addEventListener('click', cancelProjectForm);

    form.addEventListener('submit', addProject);
    form.todo = todo;

    document.addEventListener('click', deleteProject);
    document.todo = todo;

    handleProjectClick(todo);

    addTodoBtn.addEventListener('click', showAddTodoDialog, handleAddingTask(todo));

    container.addEventListener('click', deleteTask);
    container.todo = todo;

    container.addEventListener('click', (e) => {
        editTodo(e, todo);
    });

    document.addEventListener('click', showHideDescriptionOnClick);

    const collapseBtn = document.getElementById('collapse');
    collapseBtn.addEventListener('click', showSidebar);

}