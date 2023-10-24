import Project from "./project";

export default class Todo {
    constructor() {
        this.projects = [];
        this.projects.push(new Project('Family'));
        this.projects.push(new Project('Gym'));
    }

    setProjects(projects) {
        projects.forEach((project) => {
            if(this.projects.some((p) => p.title === project.title)){
                return;
            }
            this.projects.push(new Project(`${project.title}`));
        })
        return this.projects;
    }

    getProjects() {
        return this.projects;
    }

    addProject(project) {
        if(this.projects.some((p) => p.title === project.title)){
            return;
        }
        return this.projects.push(project);
    }

    getProject(title) {
        return this.projects.find(project => project.title === title);
    }

    removeProject(title) {
        this.projects.filter((project, index) => {
            if (project.projectTitle === title) {
                return this.projects.splice(index, 1);
            }
        });
    }
}
