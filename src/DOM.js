import Project from "./project";
import Todo from "./Todo";
import Task from "./Task";

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

    if(todo.getProject(titleInput.value)) {
        alert('The project with this name already exists!');
        return;
    }

    const newProject = new Project(titleInput.value);
    appendNewProject(newProject.projectTitle);
    e.currentTarget.todo.addProject(newProject);
    console.log(todo.getProjects());
    console.log(titleInput.value);
    //return newProject;
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
    if (e.target.tagName == "SPAN") {
        let span = e.target, li = span.parentNode, ul = li.parentNode;
        let projectName = li.textContent.replace('x', '');
        e.currentTarget.todo.removeProject(projectName);
        ul.removeChild(li);
        console.log(e.currentTarget.todo.getProjects());
    }
}

function createTodoUI(e) {
    const container = document.querySelectorAll('.todo-content');
    let click = false;

    // container.forEach((todo) => {
    //     todo.currentTarget.addEventListener('click', () => {
    //         const description = document.getElementById('description');
    //         const info = document.getElementById('info');
    //         if(click === false) {
    //             description.classList.remove('invisible');
    //             info.classList.add('visible');
    //             click = true;
    //         }else {
    //             click = false;
    //             info.classList.remove('visible');
    //             description.classList.add('invisible');
    //         }
    //     });
    // });

}

function createTaskfromInput() {
    const title = document.getElementById('title-input').value;
    const description = document.getElementById('description-input').value;
    const dueDate = document.getElementById('date-input').value;
    const priority = document.getElementById('priority-select').value;

    let task = new Task(title, description, dueDate, priority);
    return task;
}

function appendTask(task) {
    const conatiner = document.querySelector('.todo-container');
    const todoContent = document.createElement('div');
    const priority = document.getElementById('priority-select').value;
    todoContent.classList.add('todo-content');
    
    todoContent.innerHTML = `<div id="priority"></div>
    <div id="info">
        <div id="title"> `+ task.title +`</div>
        <div id="description" class="">`+ task.description +`</div>
    </div>
    <div id="edit"><button>edit</button></div>
    <div id="date">`+ task.dueDate +`</div>
    <div id="delete"><button>delete</button></div>`;
   
    todoContent.querySelector('#priority').style.backgroundColor = task.checkPriority(priority);
    conatiner.appendChild(todoContent);

}

function showAddTodoDialog() {
    const dialog = document.getElementById('todoDialog');
    const form = dialog.querySelector('#todoForm');
    const closeBtn = document.getElementById('closeBtn');
    dialog.showModal();

    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        dialog.close();
    });
}

function sumbitAddTaskForm() {
    const dialog = document.getElementById('todoDialog');
    const form = dialog.querySelector('#todoForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let task = createTaskfromInput();
        appendTask(task);
        dialog.close();
    });
}


export default function handleUI() {
    const addProjectBtn = document.querySelector('.add-project-btn');
    const cancelProjectBtn = document.getElementById('cancel-add-project');
    const form = document.getElementById('project-form');
    const addTodoBtn = document.querySelector('.add-todo-btn');
    const todo = new Todo();

    appendNewProject(todo.getProjects()[0].title);
    appendNewProject(todo.getProjects()[1].title);

    addProjectBtn.addEventListener('click', showProjectForm);
    cancelProjectBtn.addEventListener('click', cancelProjectForm);
    form.addEventListener('submit', addProject);
    form.todo = todo;
    document.addEventListener('click', deleteProject);
    document.todo = todo;

    //bug, enter doesnt submit the form, fix it 
    form.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            if(document.getElementById('project-input').value.length < 3){
                alert('Enter title with 3 or more letters!');
            }else {
                addProject(e);
            }
        }
    });

    document.addEventListener('click', createTodoUI);
    addTodoBtn.addEventListener('click', showAddTodoDialog);
    sumbitAddTaskForm();


}