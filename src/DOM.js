import Project from "./project";
import Todo from "./Todo";

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

export default function handleUI() {
    const addProjectBtn = document.querySelector('.add-project-btn');
    const cancelProjectBtn = document.getElementById('cancel-add-project');
    const form = document.getElementById('project-form');
    const deleteBtns = document.querySelectorAll('span');
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




}