/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handleUI)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo */ \"./src/Todo.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Storage */ \"./src/Storage.js\");\n\n\n\n\n\nfunction showProjectForm() {\n    const form = document.getElementById('project-form');\n    form.classList.remove('hidden');\n    form.classList.add('active');\n}\n\nfunction cancelProjectForm(e) {\n    e.preventDefault();\n    const form = document.getElementById('project-form');\n    form.classList.add('hidden');\n    form.classList.remove('active');\n}\n\nfunction addProject(e) {\n    e.preventDefault();\n    const titleInput = document.getElementById('project-input');\n    let todo = e.currentTarget.todo;\n\n    if (todo.getProject(titleInput.value.charAt(0).toUpperCase() + titleInput.value.slice(1).toLowerCase())) {\n        alert('The project with this name already exists!');\n        return;\n    }\n\n    const newProject = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](titleInput.value.charAt(0).toUpperCase() + titleInput.value.slice(1).toLowerCase());\n    appendNewProject(newProject.projectTitle);\n    todo.addProject(newProject); //add project to Todo\n    updateProjectsScreen(newProject.projectTitle); //switch to new project\n    updateTasksScreen(todo);\n    (0,_Storage__WEBPACK_IMPORTED_MODULE_3__.setTodoInLocalStorage)(todo);\n\n}\n\nfunction appendNewProject(title) {\n    const form = document.getElementById('project-form');\n    const projectsList = document.querySelector('.projects-list');\n    const li = document.createElement('li');\n    const span = document.createElement('span');\n\n    li.textContent = title;\n    span.textContent = 'x';\n    li.appendChild(span);\n    projectsList.appendChild(li);\n    form.classList.add('hidden');\n    form.classList.remove('active');\n}\n\n\nfunction deleteProject(e) {\n    if (e.target.tagName == 'SPAN') {\n        let span = e.target, li = span.parentNode, ul = li.parentNode;\n        let projectName = li.textContent.replace('x', '');\n        e.currentTarget.todo.removeProject(projectName);\n        ul.removeChild(li);\n        console.log(e.currentTarget.todo.getProjects()); /// delte later\n        inititializeProject(e.currentTarget.todo);\n        updateTasksScreen(e.currentTarget.todo);\n        (0,_Storage__WEBPACK_IMPORTED_MODULE_3__.removeProjectFromLocalStroage)(projectName);\n    }\n}\n\nfunction updateProjectsScreen(title) {\n    const listOfProject = document.querySelector('.projects-list');\n    const projects = listOfProject.childNodes;\n\n    for (let i = 0; i < projects.length; i++) {\n        if (projects[i].textContent.replace('x', '') == title) {\n            projects[i].classList.add('activeProject');\n            projects[i].classList.remove('disactiveProject');\n        } else {\n            projects[i].classList.add('disactiveProject');\n            projects[i].classList.remove('activeProject');\n        }\n    }\n}\n\nfunction inititializeProject(todo) {\n    if ((todo.getProjects().length == 0)) {\n        return;\n    } else if (todo.getProjects()[0].title != '') {\n        let title = todo.getProjects()[0].title;\n        updateProjectsScreen(title);\n    }\n}\n\nfunction handleProjectClick(todo) {\n    const listOfProject = document.querySelector('.projects-list');\n    listOfProject.addEventListener('click', (e) => {\n        if (e.target.tagName == 'LI') {\n            let title = e.target.textContent.replace('x', '');\n            updateProjectsScreen(title);\n            updateTasksScreen(todo);\n        }\n    });\n}\n\nfunction getCurrentProject(todo) {\n    const listOfProject = document.querySelector('.projects-list');\n    const li = listOfProject.childNodes;\n    let title;\n    let currentProject;\n\n    for (let i = 0; i < li.length; i++) {\n        if (li[i].classList.contains('activeProject')) {\n            title = li[i].textContent.replace('x', '');\n            currentProject = todo.getProject(title);\n            return currentProject;\n\n        }\n    }\n}\n\nfunction showHideDescriptionOnClick(e) {\n\n    if (e.target.tagName == 'DIV') {\n        if (e.target.classList.contains('title') ||\n            e.target.classList.contains('description')) {\n            const container = e.target.parentNode;\n            const descriptionDiv = container.querySelector('.description');\n            console.log(e.target)\n            if (descriptionDiv.classList.contains('hidden')) {\n                descriptionDiv.classList.remove('hidden');\n            } else {\n                descriptionDiv.classList.add('hidden');\n            }\n        }\n    }\n}\n\nfunction getTaskfromInput() {\n    const title = document.getElementById('title-input').value;\n    const description = document.getElementById('description-input').value;\n    const dueDate = document.getElementById('date-input').value;\n    const priority = document.getElementById('priority-select').value;\n\n    let task = { title, description, dueDate, priority };\n    return task;\n}\n\nfunction appendTask(task) {\n    const conatiner = document.querySelector('.todo-container');\n    const todoContent = document.createElement('div');\n    todoContent.classList.add('todo-content');\n\n    todoContent.innerHTML = `<div id=\"priority\"></div>\n    <div id=\"info\">\n        <div class=\"title\">`+ task.title + `</div>\n        <div class=\"description\" class=\"\">`+ task.description + `</div>\n    </div>\n    <div class=\"editDiv\"><button class=\"edit\"></button></div>\n    <div class=\"dateDiv\">`+ task.dueDate + `</div>\n    <div class=\"deleteDiv\"><button class=\"delete\"></button></div>`;\n\n    todoContent.querySelector('#priority').style.backgroundColor = task.checkPriority(task.priority);\n    conatiner.appendChild(todoContent);\n}\n\nfunction showAddTodoDialog() {\n    const dialog = document.getElementById('todoDialog');\n    const confrimBtn = document.querySelector('.addBtn');\n    const editBtn = document.querySelector('.editBtn');\n    editBtn.classList.add('hidden');\n    editBtn.disabled = true;\n    confrimBtn.classList.remove('hidden');\n    confrimBtn.disabled = false;\n    const closeBtn = document.getElementById('closeBtn');\n    dialog.showModal();\n\n    closeBtn.addEventListener('click', (e) => {\n        e.preventDefault();\n        dialog.close();\n    });\n}\n\nfunction handleAddingTask(todo) {\n    const dialog = document.getElementById('todoDialog');\n    const form = dialog.querySelector('#todoForm');\n    const listOfProject = document.querySelector('.projects-list');\n    let li = listOfProject.childNodes;\n    const editBtn = document.querySelector('.editBtn');\n\n    form.addEventListener('submit', (e) => {\n        e.preventDefault();\n        if (editBtn.classList.contains('hidden')) {\n            li.forEach((list) => {\n                if (list.classList.contains('activeProject')) {\n                    const currentProject = getCurrentProject(todo);\n                    const input = getTaskfromInput();\n                    const task = new _Task__WEBPACK_IMPORTED_MODULE_2__[\"default\"](input.title.toLowerCase(), input.description, input.dueDate, input.priority);\n                    if (currentProject.getTask(task.title.toLowerCase())) {\n                        alert('Tasks can\\'t have the same name');\n                    }\n                    currentProject.addTask(task);\n                    updateTasksScreen(todo);\n                    (0,_Storage__WEBPACK_IMPORTED_MODULE_3__.setTodoInLocalStorage)(todo);\n\n                }\n                dialog.close();\n            });\n        }\n    });\n}\n\nfunction deleteTask(e) {\n    let currentProject = getCurrentProject(e.currentTarget.todo);\n\n    if (e.target.tagName == 'BUTTON') {\n        if (e.target.classList.contains('delete')) {\n            const contentDiv = e.target.parentNode.parentNode, containerDiv = contentDiv.parentNode;\n            const title = contentDiv.childNodes[2].childNodes[1].textContent;\n            (0,_Storage__WEBPACK_IMPORTED_MODULE_3__.removeTaskFromLocalStorage)(currentProject.title, title);\n            currentProject.removeTask(title);\n            containerDiv.removeChild(contentDiv);\n        }\n    }\n}\n\nfunction editTodo(e, todo) {\n    const dialog = document.getElementById('todoDialog');\n    const form = dialog.querySelector('#todoForm');\n    const closeBtn = document.getElementById('closeBtn');\n    let clicked = false;\n\n    if (e.target.tagName == 'BUTTON') {\n\n        if (e.target.classList.contains('edit')) {\n            let contentDiv = e.target.parentNode.parentNode;\n            console.log(contentDiv)\n            let titleDivs = contentDiv.querySelector('.title');\n            let priorityDiv = contentDiv.querySelector('#priority');\n            let descriptionDiv = contentDiv.querySelector('.description');\n            let dueDateDiv = contentDiv.querySelector('.dateDiv');\n\n            const confrimBtn = document.querySelector('.addBtn');\n            const editBtn = document.querySelector('.editBtn');\n            dialog.showModal();\n            editBtn.classList.remove('hidden');\n            confrimBtn.classList.add('hidden');\n            editBtn.disabled = false;\n            confrimBtn.disabled = true;\n\n            clicked = true;\n\n            form.addEventListener('submit', (e) => {\n\n                if (confrimBtn.classList.contains('hidden') && clicked) {\n                    e.preventDefault();\n                    let currentProject = getCurrentProject(todo);\n                    const input = getTaskfromInput();\n\n\n                    if (currentProject.getTask(titleDivs.textContent)) {\n                        if (input.title != titleDivs.textContent) {\n                            if (currentProject.getTask(input.title)) {\n                                alert('Tasks can\\'t have the same names!');\n                                return;\n                            }\n                        }\n                        let editedTask = currentProject.editTask(titleDivs.textContent, input.title, input.description, input.dueDate, input.priority);\n                        titleDivs.textContent = input.title.toLowerCase();\n                        descriptionDiv.textContent = input.description;\n                        dueDateDiv.textContent = input.dueDate;\n                        priorityDiv.style.backgroundColor = editedTask.checkPriority(input.priority);\n                        (0,_Storage__WEBPACK_IMPORTED_MODULE_3__.setTodoInLocalStorage)(todo);\n                        clicked = false;\n                    }\n                    dialog.close();\n                };\n            });\n\n            closeBtn.addEventListener('click', (e) => {\n                e.preventDefault();\n                dialog.close();\n            });\n        }\n    }\n}\n\nfunction updateTasksScreen(todo) {\n    const container = document.querySelector('.todo-container');\n\n    while (container.hasChildNodes()) {\n        container.removeChild(container.firstChild);\n    }\n\n    const currentProject = getCurrentProject(todo);\n    if (currentProject) {\n        let tasks = currentProject.getTasks();\n        tasks.forEach((task) => appendTask(task));\n    } else {\n        return; //if project doesnt exists\n    }\n\n}\n\nfunction showSidebar() {\n    const sidebar = document.querySelector('.sidebar');\n    sidebar.classList.toggle('active');\n}\n\nfunction handleUI() {\n    const addProjectBtn = document.querySelector('.add-project-btn');\n    const cancelProjectBtn = document.getElementById('cancel-add-project');\n    const form = document.getElementById('project-form');\n    const addTodoBtn = document.querySelector('.add-todo-btn');\n    const container = document.querySelector('.todo-container');\n\n    let todo = new _Todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n    window.onload = function () {\n        if (!localStorage.getItem('todo')) {\n\n            todo.getProjects()[0].addTask(new _Task__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('do laundry', 'or have no clothes to wear', '2023-10-25', 'High'));\n            todo.getProjects()[0].addTask(new _Task__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('do shopping', 'till friday', '2023-10-27', 'Medium'));\n            todo.getProjects()[0].addTask(new _Task__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('bake a birthday cake', 'for Josie', '2023-12-12', 'Low'));\n            todo.getProjects()[1].addTask(new _Task__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('change workout', 'figure out new routine', '2023-01-01', 'High'));\n            (0,_Storage__WEBPACK_IMPORTED_MODULE_3__.setTodoInLocalStorage)(todo);\n\n        } else {\n\n            todo.setProjects((0,_Storage__WEBPACK_IMPORTED_MODULE_3__.getProjectsFromLocalStroage)().projects);\n            let projects = (0,_Storage__WEBPACK_IMPORTED_MODULE_3__.getProjectsFromLocalStroage)().projects;\n            todo.getProjects().forEach((project) => {\n                projects.forEach((p) => {\n                    if (project.title === p.title) {\n                        p.tasks.forEach((task) => {\n                            project.addTask(new _Task__WEBPACK_IMPORTED_MODULE_2__[\"default\"](task.title, task.description, task.dueDate, task.priority));\n                        });\n                    }\n\n                });\n            });\n        }\n        todo.getProjects().forEach((project) => {\n            appendNewProject(project.title);\n        });\n        inititializeProject(todo);\n        updateTasksScreen(todo);\n    }\n\n    addProjectBtn.addEventListener('click', showProjectForm);\n    cancelProjectBtn.addEventListener('click', cancelProjectForm);\n\n    form.addEventListener('submit', addProject);\n    form.todo = todo;\n\n    document.addEventListener('click', deleteProject);\n    document.todo = todo;\n\n    handleProjectClick(todo);\n\n    addTodoBtn.addEventListener('click', showAddTodoDialog, handleAddingTask(todo));\n\n    container.addEventListener('click', deleteTask);\n    container.todo = todo;\n\n    container.addEventListener('click', (e) => {\n        editTodo(e, todo);\n    });\n\n    document.addEventListener('click', showHideDescriptionOnClick);\n\n    const collapseBtn = document.getElementById('collapse');\n    collapseBtn.addEventListener('click', showSidebar);\n\n}\n\n//# sourceURL=webpack://todo-app/./src/DOM.js?");

/***/ }),

/***/ "./src/Storage.js":
/*!************************!*\
  !*** ./src/Storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getProjectsFromLocalStroage: () => (/* binding */ getProjectsFromLocalStroage),\n/* harmony export */   removeProjectFromLocalStroage: () => (/* binding */ removeProjectFromLocalStroage),\n/* harmony export */   removeTaskFromLocalStorage: () => (/* binding */ removeTaskFromLocalStorage),\n/* harmony export */   setTodoInLocalStorage: () => (/* binding */ setTodoInLocalStorage)\n/* harmony export */ });\nfunction setTodoInLocalStorage(todo) {\n    localStorage.setItem('todo', JSON.stringify(todo));\n}\n\nfunction removeProjectFromLocalStroage(title) {\n    let todo = JSON.parse(localStorage.getItem('todo'));\n   \n    for (let i = 0; i < todo.projects.length; i++) {\n        if (todo.projects[i].title === title) {\n            todo.projects.splice(i, 1);\n        }\n    }\n    todo = JSON.stringify(todo);\n    localStorage.setItem('todo', todo);\n}\n\nfunction removeTaskFromLocalStorage(currentProjectName, taskName) {\n    let todo = JSON.parse(localStorage.getItem('todo'));\n   \n    for (let i = 0; i < todo.projects.length; i++) {\n        if (todo.projects[i].title === currentProjectName) {\n            let project = todo.projects[i];\n            for(let j = 0; j < project.tasks.length; j++) {\n                if(project.tasks[j].title === taskName) {\n                    project.tasks.splice(j, 1);\n                }\n            }\n        }\n    }\n    todo = JSON.stringify(todo);\n    window.localStorage.setItem('todo', todo);\n}\n\nfunction getProjectsFromLocalStroage() {\n    let todo = JSON.parse(localStorage.getItem('todo')) || [];\n    return todo;\n}\n\n\n\n//# sourceURL=webpack://todo-app/./src/Storage.js?");

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n    constructor(title, description = '', dueDate, priority) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n    }\n\n    get taskTitle() {\n        return this.title;\n    }\n\n    checkPriority(priority) {\n        let backgroundColor;\n\n        if(priority === \"High\") {\n            backgroundColor = '#F63131';\n        }else if(priority === \"Low\") {\n            backgroundColor = 'green';\n        }else {\n            backgroundColor = 'orange';\n        }\n        return backgroundColor;\n    }\n}\n\n//# sourceURL=webpack://todo-app/./src/Task.js?");

/***/ }),

/***/ "./src/Todo.js":
/*!*********************!*\
  !*** ./src/Todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\nclass Todo {\n    constructor() {\n        this.projects = [];\n        this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Family'));\n        this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Gym'));\n    }\n\n    setProjects(projects) {\n        projects.forEach((project) => {\n            if(this.projects.some((p) => p.title === project.title)){\n                return;\n            }\n            this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](`${project.title}`));\n        })\n        return this.projects;\n    }\n\n    getProjects() {\n        return this.projects;\n    }\n\n    addProject(project) {\n        if(this.projects.some((p) => p.title === project.title)){\n            return;\n        }\n        return this.projects.push(project);\n    }\n\n    getProject(title) {\n        return this.projects.find(project => project.title === title);\n    }\n\n    removeProject(title) {\n        this.projects.filter((project, index) => {\n            if (project.projectTitle === title) {\n                return this.projects.splice(index, 1);\n            }\n        });\n    }\n}\n\n\n//# sourceURL=webpack://todo-app/./src/Todo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n\n\n(0,_DOM__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://todo-app/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n    constructor(title) {\n        this.title = title;\n        this.tasks = [];\n    }\n\n    get projectTitle() {\n        return this.title;\n    }\n\n    set projectTitle(name) {\n        this.title = name;\n    }\n\n    getTasks() {\n        return this.tasks;\n    }\n\n    setTasks(tasks) {\n        this.tasks = tasks;\n    }\n\n    addTask(task) {\n        if(this.tasks.some((p) => p.title === task.title)){\n            return;\n        }\n        return this.tasks.push(task);\n    }\n\n    getTask(taskTitle) {\n        return this.tasks.find(tasks => tasks.title === taskTitle);\n    }\n    \n    editTask(taskTitle, newTitle, description, dueDate, priority) {\n       const task = this.getTask(taskTitle);\n       if(task){\n        task.title = newTitle;\n        task.description = description;\n        task.dueDate = dueDate;\n        task.priority = priority;\n        return task;\n       }\n    }\n\n    removeTask(taskTitle) {\n        this.tasks.filter((task, index) => {\n            if (task.taskTitle === taskTitle) {\n                return this.tasks.splice(index, 1);\n            }\n        });\n\n    \n\n    }\n\n\n\n}\n\n//# sourceURL=webpack://todo-app/./src/project.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;