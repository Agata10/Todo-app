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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handleUI)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo */ \"./src/Todo.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\n\n\n\n\nfunction showProjectForm() {\n    const form = document.getElementById('project-form');\n    form.classList.remove('hidden');\n    form.classList.add('active');\n}\n\nfunction cancelProjectForm(e) {\n    e.preventDefault();\n    const form = document.getElementById('project-form');\n    form.classList.add('hidden');\n    form.classList.remove('active');\n}\n\nfunction addProject(e) {\n    e.preventDefault();\n    const titleInput = document.getElementById('project-input');\n    let todo = e.currentTarget.todo;\n\n    if (todo.getProject(titleInput.value)) {\n        alert('The project with this name already exists!');\n        return;\n    }\n\n    const newProject = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](titleInput.value);\n    appendNewProject(newProject.projectTitle);\n    todo.addProject(newProject); //add project to Todo\n    console.log(todo.getProjects()); //delete later\n\n    updateProjectsScreen(newProject.projectTitle); //switch to new project\n    updateTasksScreen(todo);\n\n\n}\n\nfunction appendNewProject(title) {\n    const form = document.getElementById('project-form');\n    const projectsList = document.querySelector('.projects-list');\n    const li = document.createElement('li');\n    const span = document.createElement('span');\n\n    li.textContent = title;\n    span.textContent = 'x';\n    li.appendChild(span);\n    projectsList.appendChild(li);\n    form.classList.add('hidden');\n    form.classList.remove('active');\n}\n\n\nfunction deleteProject(e) {\n    if (e.target.tagName == 'SPAN') {\n        let span = e.target, li = span.parentNode, ul = li.parentNode;\n        let projectName = li.textContent.replace('x', '');\n        e.currentTarget.todo.removeProject(projectName);\n        ul.removeChild(li);\n        console.log(e.currentTarget.todo.getProjects()); /// delte later\n        inititializeProject(e.currentTarget.todo);\n        updateTasksScreen(e.currentTarget.todo);\n    }\n}\n\nfunction updateProjectsScreen(title) {\n    const listOfProject = document.querySelector('.projects-list');\n    const projects = listOfProject.childNodes;\n\n    for (let i = 0; i < projects.length; i++) {\n        if (projects[i].textContent.replace('x', '') == title) {\n            projects[i].classList.add('activeProject');\n            projects[i].classList.remove('disactiveProject');\n        } else {\n            projects[i].classList.add('disactiveProject');\n            projects[i].classList.remove('activeProject');\n        }\n    }\n}\n\nfunction inititializeProject(todo) {\n    if ((todo.getProjects().length == 0)) {\n        console.log(todo.getProjects()) // delete later\n        return;\n    } else if (todo.getProjects()[0].title != '') {\n        let title = todo.getProjects()[0].title;\n        updateProjectsScreen(title);\n    }\n}\n\nfunction handleProjectClick(todo) {\n    const listOfProject = document.querySelector('.projects-list');\n    listOfProject.addEventListener('click', (e) => {\n        if (e.target.tagName == 'LI') {\n            let title = e.target.textContent.replace('x', '');\n            updateProjectsScreen(title);\n            updateTasksScreen(todo);\n        }\n    });\n}\n\nfunction getCurrentProject(todo) {\n    const listOfProject = document.querySelector('.projects-list');\n    const li = listOfProject.childNodes;\n    let title;\n    let currentProject;\n\n    for (let i = 0; i < li.length; i++) {\n        if (li[i].classList.contains('activeProject')) {\n            title = li[i].textContent.replace('x', '');\n            currentProject = todo.getProject(title);\n            return currentProject;\n\n        }\n    }\n}\n\nfunction showHideDescriptionOnClick(e) {\n    const container = document.querySelectorAll('.todo-content');\n    let click = false;\n\n    // container.forEach((todo) => {\n    //     todo.currentTarget.addEventListener('click', () => {\n    //         const description = document.getElementById('description');\n    //         const info = document.getElementById('info');\n    //         if(click === false) {\n    //             description.classList.remove('invisible');\n    //             info.classList.add('visible');\n    //             click = true;\n    //         }else {\n    //             click = false;\n    //             info.classList.remove('visible');\n    //             description.classList.add('invisible');\n    //         }\n    //     });\n    // });\n\n}\n\nfunction getTaskfromInput() {\n    const title = document.getElementById('title-input').value;\n    const description = document.getElementById('description-input').value;\n    const dueDate = document.getElementById('date-input').value;\n    const priority = document.getElementById('priority-select').value;\n\n    let task = { title, description, dueDate, priority };\n    return task;\n}\n\nfunction appendTask(task) {\n    const conatiner = document.querySelector('.todo-container');\n    const todoContent = document.createElement('div');\n    todoContent.classList.add('todo-content');\n\n    todoContent.innerHTML = `<div id=\"priority\"></div>\n    <div id=\"info\">\n        <div class=\"title\">`+ task.title + `</div>\n        <div class=\"description\" class=\"\">`+ task.description + `</div>\n    </div>\n    <div class=\"editDiv\"><button class=\"edit\">edit</button></div>\n    <div class=\"dateDiv\">`+ task.dueDate + `</div>\n    <div class=\"deleteDiv\"><button class=\"delete\">delete</button></div>`;\n\n    todoContent.querySelector('#priority').style.backgroundColor = task.checkPriority(task.priority);\n    conatiner.appendChild(todoContent);\n}\n\nfunction showAddTodoDialog() {\n    const dialog = document.getElementById('todoDialog');\n    const confrimBtn = document.querySelector('.addBtn');\n    const editBtn = document.querySelector('.editBtn');\n    editBtn.classList.add('hidden');\n    editBtn.disabled = true;\n    confrimBtn.classList.remove('hidden');\n    confrimBtn.disabled = false;\n    const closeBtn = document.getElementById('closeBtn');\n    dialog.showModal();\n\n    closeBtn.addEventListener('click', (e) => {\n        e.preventDefault();\n        dialog.close();\n    });\n}\n\nfunction handleAddingTask(todo) {\n    const dialog = document.getElementById('todoDialog');\n    const form = dialog.querySelector('#todoForm');\n    const listOfProject = document.querySelector('.projects-list');\n    let li = listOfProject.childNodes;\n    const editBtn = document.querySelector('.editBtn');\n\n    form.addEventListener('submit', (e) => {\n        e.preventDefault();\n        if (editBtn.classList.contains('hidden')) {\n            li.forEach((list) => {\n                if (list.classList.contains('activeProject')) {\n                    const currentProject = getCurrentProject(todo);\n                    const input = getTaskfromInput();\n                    const task = new _Task__WEBPACK_IMPORTED_MODULE_2__[\"default\"](input.title, input.description, input.dueDate, input.priority);\n                    if (currentProject.getTask(task.title)) {\n                        alert('Tasks can\\'t have the same name');\n                    }\n                    currentProject.addTask(task);\n                    console.log(currentProject); // delete later\n                    updateTasksScreen(todo);\n                    console.log('addign') //delete later\n\n                }\n                dialog.close();\n            });\n        }\n    });\n\n\n}\n\nfunction deleteTask(e) {\n    let currentProject = getCurrentProject(e.currentTarget.todo);\n\n    if (e.target.tagName == 'BUTTON') {\n        if (e.target.classList.contains('delete')) {\n            const contentDiv = e.target.parentNode.parentNode, containerDiv = contentDiv.parentNode;\n            const title = contentDiv.childNodes[2].childNodes[1].textContent;\n            currentProject.removeTask(title);\n            console.log(currentProject); //delete later\n            containerDiv.removeChild(contentDiv);\n        }\n    }\n}\n\nfunction editTodo(e, todo) {\n    const dialog = document.getElementById('todoDialog');\n    const form = dialog.querySelector('#todoForm');\n    const closeBtn = document.getElementById('closeBtn');\n    let clicked = false;\n    if (e.target.tagName == 'BUTTON') {\n\n        if (e.target.classList.contains('edit')) {\n            let contentDiv = e.target.parentNode.parentNode;\n             console.log(contentDiv)\n            //let titleNode = contentDiv.childNodes[2].childNodes[1].textContent;\n            let titleDivs = contentDiv.querySelector('.title');\n            let priorityDiv = contentDiv.querySelector('#priority');\n            let descriptionDiv = contentDiv.querySelector('.description');\n            let dueDateDiv = contentDiv.querySelector('.dateDiv');\n\n            const confrimBtn = document.querySelector('.addBtn');\n            const editBtn = document.querySelector('.editBtn');\n\n            console.log(titleDivs.textContent) //delete later\n\n            dialog.showModal();\n            editBtn.classList.remove('hidden');\n            confrimBtn.classList.add('hidden');\n            editBtn.disabled = false;\n            confrimBtn.disabled = true;\n\n            clicked = true;\n            form.addEventListener('submit', (e) => {\n\n                if (confrimBtn.classList.contains('hidden') && clicked) {\n                    e.preventDefault();\n                    let currentProject = getCurrentProject(todo);\n                    const input = getTaskfromInput();\n                    console.log(titleDivs)\n                    console.log(priorityDiv)\n                    console.log(descriptionDiv)\n                    console.log(dueDateDiv)\n                    console.log(input) // delete later\n\n                    if(currentProject.getTask(titleDivs.textContent)) {\n                        let editedTask = currentProject.editTask(titleDivs.textContent, input.title, input.description, input.dueDate, input.priority);\n                        titleDivs.textContent = input.title;\n                        //console.log(titleDivs[i]); // delete later\n                        descriptionDiv.textContent = input.description;\n                        dueDateDiv.textContent = input.dueDate;\n                        priorityDiv.style.backgroundColor = editedTask.checkPriority(input.priority);\n                        console.log(titleDivs)\n                        console.log(priorityDiv)\n                        console.log(descriptionDiv)\n                        console.log(dueDateDiv)\n                        console.log(todo) //delete later\n                        console.log('editing')\n                        clicked = false;\n                    } else {\n                        return;\n                    }\n                  \n\n\n\n                };\n                dialog.close();\n            });\n\n\n            closeBtn.addEventListener('click', (e) => {\n                e.preventDefault();\n                dialog.close();\n            });\n\n\n\n        }\n\n\n    }\n}\n\nfunction updateTasksScreen(todo) {\n    const container = document.querySelector('.todo-container');\n\n    while (container.hasChildNodes()) {\n        container.removeChild(container.firstChild);\n    }\n\n    let currentProject = getCurrentProject(todo);\n    if (currentProject) {\n        let tasks = currentProject.getTasks();\n        tasks.forEach((task) => appendTask(task));\n    } else {\n        return; //if project doesnt exists\n    }\n\n}\n\nfunction handleUI() {\n    const addProjectBtn = document.querySelector('.add-project-btn');\n    const cancelProjectBtn = document.getElementById('cancel-add-project');\n    const form = document.getElementById('project-form');\n    const addTodoBtn = document.querySelector('.add-todo-btn');\n    const container = document.querySelector('.todo-container');\n\n    const todo = new _Todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n    appendNewProject(todo.getProjects()[0].title);\n    appendNewProject(todo.getProjects()[1].title);\n    todo.getProjects()[0].addTask(new _Task__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('elo', 'jestem', '2023-12-12', 'Low'));\n    todo.getProjects()[0].addTask(new _Task__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('second', 'secy', '2023-12-12', 'Medium'));\n    todo.getProjects()[0].addTask(new _Task__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('third', 'thirdy', '2023-12-12', 'High'));\n    todo.getProjects()[1].addTask(new _Task__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('ela', 'jestem', '2023-12-12', 'High'));\n    inititializeProject(todo);\n    updateTasksScreen(todo);\n\n    addProjectBtn.addEventListener('click', showProjectForm);\n    cancelProjectBtn.addEventListener('click', cancelProjectForm);\n\n    form.addEventListener('submit', addProject);\n    form.todo = todo;\n\n    document.addEventListener('click', deleteProject);\n    document.todo = todo;\n\n    handleProjectClick(todo);\n\n    //document.addEventListener('click', createTodoUI);\n    addTodoBtn.addEventListener('click', showAddTodoDialog, handleAddingTask(todo));\n    // handleAddingTask(todo);\n\n    container.addEventListener('click', deleteTask);\n    container.todo = todo;\n\n\n    container.addEventListener('click', (e) => {\n        editTodo(e, todo);\n    });\n\n\n}\n\n//# sourceURL=webpack://todo-app/./src/DOM.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\nclass Todo {\n    constructor() {\n        this.projects = [];\n        this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Family'));\n        this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Gym'));\n    }\n\n    // setProjects(projects) {\n    //     this.projects = projects;\n    // }\n\n    getProjects() {\n        return this.projects;\n    }\n\n    addProject(project) {\n        if(this.projects.some((p) => p.title === project.title)){\n            return;\n        }\n        return this.projects.push(project);\n    }\n\n    getProject(title) {\n        return this.projects.find(project => project.title === title);\n    }\n\n    removeProject(title) {\n        this.projects.filter((project, index) => {\n            if (project.projectTitle === title) {\n                return this.projects.splice(index, 1);\n            }\n        });\n    }\n}\n\n//# sourceURL=webpack://todo-app/./src/Todo.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n    constructor(title) {\n        this.title = title;\n        this.tasks = [];\n    }\n\n    get projectTitle() {\n        return this.title;\n    }\n\n    set projectTitle(name) {\n        this.title = name;\n    }\n\n    getTasks() {\n        return this.tasks;\n    }\n\n    addTask(task) {\n        if(this.tasks.some((p) => p.title === task.title)){\n            return;\n        }\n        return this.tasks.push(task);\n    }\n\n    getTask(taskTitle) {\n        return this.tasks.find(tasks => tasks.title === taskTitle);\n    }\n    \n    editTask(taskTitle, newTitle, description, dueDate, priority) {\n       const task = this.getTask(taskTitle);\n       if(task){\n        task.title = newTitle;\n        task.description = description;\n        task.dueDate = dueDate;\n        task.priority = priority;\n        return task;\n       }\n    }\n\n    removeTask(taskTitle) {\n        this.tasks.filter((task, index) => {\n            if (task.taskTitle === taskTitle) {\n                return this.tasks.splice(index, 1);\n            }\n        });\n\n    \n\n    }\n\n\n\n}\n\n//# sourceURL=webpack://todo-app/./src/project.js?");

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