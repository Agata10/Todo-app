import { functionsIn } from "lodash";
import Project from "./project";


function appendNeWProject(project) {
    let ul = document.querySelector('.projects-list');
    let list = document.createElement('li');
    list.textContent = project.getName();
    
    let deleteSpan = document.createElement('span');
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

function removeProject() {
    let removeBtns = document.querySelectorAll('.delete-project');

    removeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.parentNode.remove();
        })
    })
}

export default function addProject() {
    let addProjectBtn = document.querySelector('.add-project-btn');
    let div = document.querySelector('.form-div');
    

    addProjectBtn.addEventListener('click', () => {
        div.innerHTML = `
        <form id="project-form"> 
            <input type="text" id="project-input" name="project-input" minlength="3" maxlength="10" placeholder="Project Name.." required>
            <button value="cancel" id="cancel-add-project">Cancel</button>
            <button type="submit" id="confirm-add-project">Add</button>
        </form>`
        let form = document.querySelector('#project-form');
        form.classList.add('active');
        form.classList.remove('hidden');

        let cancelBtn = document.getElementById('cancel-add-project');
      
        cancelBtn.addEventListener('click', (event) => {
            event.preventDefault();
            rmActiveClass(form);
        });

        let input = document.getElementById('project-input');
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const newProject = new Project(input.value);
            appendNeWProject(newProject);
            rmActiveClass(form);
            removeProject();
        });

        form.addEventListener('keypress', (e) => {
            if(e.key === 'Enter') {
                e.preventDefault();
                const newProject = new Project(input.value);
                appendNeWProject(newProject);
                rmActiveClass(form);
                removeProject();
            }
        });
    });
 
}