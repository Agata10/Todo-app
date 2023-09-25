
import Project from "./project";

class Projects {
    constructor() {
        this.projects = [];
    }

    getProjects() {
        return this.projects;
    }

    addProject(project) {
        return this.projects.push(project)
    }

    removeProject(projectName) {
        this.projects.filter((project, index) => {
            if (project.getName() === projectName) {
                return this.projects.splice(index, 1);
            }
        });
    }
}

function appendNeWProject(project) {
    const ul = document.querySelector('.projects-list');
    const list = document.createElement('li');
    list.textContent = project.getName();

    const deleteSpan = document.createElement('span');
    deleteSpan.classList.add('delete-project');
    deleteSpan.textContent = 'x';

    list.appendChild(deleteSpan);
    ul.appendChild(list);

    return ul;
}

function rmActiveClass(elem) {
    elem.classList.remove('active');
    elem.classList.add('hidden');

    return elem;
}

function showAddProjectForm() {
    const form = document.querySelector('#project-form');
    form.classList.add('active');
    form.classList.remove('hidden');
}

function updateProjects(projects) {
    const input = document.getElementById('project-input');
    const newProject = new Project(input.value);
    projects.addProject(newProject);
    appendNeWProject(newProject);
}

function removeSpanParent(event) { //remove project from DOM list
    if (event.target.tagName == "SPAN") {
        let span = event.target, li = span.parentNode, ul = li.parentNode;
        let projectName = li.textContent.replace('x', '');
        event.currentTarget.myProjects.removeProject(projectName);
        ul.removeChild(li);
    }
}


export default function addProject() {
    const addProjectBtn = document.querySelector('.add-project-btn');
    const cancelBtn = document.getElementById('cancel-add-project');
    let projects = new Projects();


    const form = document.querySelector('#project-form');


    addProjectBtn.addEventListener('click', showAddProjectForm);
    document.addEventListener('click', removeSpanParent); //rmeove project from list
    document.myProjects = projects;

    cancelBtn.addEventListener('click', (event) => {
        event.preventDefault();
        rmActiveClass(form);
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        updateProjects(projects);
        rmActiveClass(form);
    });

    form.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            updateProjects(projects);
            rmActiveClass(form);
        }
    });

    //  const removeBtns = document.querySelectorAll('.delete-project');
    //     removeBtns.forEach(span => {
    //         span.addEventListener('click', (e) => {

    //             let projectLi = span.parentNode;
    //             let projectUl = projectLi.parentNode;
    //             let projectName = projectLi.textContent.replace('x', '');
    //             projectUl.removeChild(projectLi);
    //             projects.removeProject(projectName);
    //             console.log('hej');
    //         });
    //     });

















    console.log(projects);
}