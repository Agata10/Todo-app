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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handleUI)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo */ \"./src/Todo.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\n\n\n\n\nfunction showProjectForm() {\n    const form = document.getElementById('project-form');\n    form.classList.remove('hidden');\n    form.classList.add('active');\n}\n\nfunction cancelProjectForm(e) {\n    e.preventDefault();\n    const form = document.getElementById('project-form');\n    form.classList.add('hidden');\n    form.classList.remove('active');\n}\n\nfunction addProject(e) {\n    e.preventDefault();\n    const titleInput = document.getElementById('project-input');\n    let todo = e.currentTarget.todo;\n\n    if (todo.getProject(titleInput.value)) {\n        alert('The project with this name already exists!');\n        return;\n    }\n\n    const newProject = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](titleInput.value);\n    appendNewProject(newProject.projectTitle);\n    e.currentTarget.todo.addProject(newProject); //add project to Todo\n    console.log(todo.getProjects());\n    //return newProject;\n}\n\nfunction appendNewProject(title) {\n    const form = document.getElementById('project-form');\n    const projectsList = document.querySelector('.projects-list');\n    const li = document.createElement('li');\n    const span = document.createElement('span');\n\n    li.textContent = title;\n    span.textContent = 'x';\n    li.appendChild(span);\n    projectsList.appendChild(li);\n    form.classList.add('hidden');\n    form.classList.remove('active');\n}\n\nfunction deleteProject(e) {\n    if (e.target.tagName == 'SPAN') {\n        let span = e.target, li = span.parentNode, ul = li.parentNode;\n        let projectName = li.textContent.replace('x', '');\n        e.currentTarget.todo.removeProject(projectName);\n        ul.removeChild(li);\n        console.log(e.currentTarget.todo.getProjects());\n        inititializeProject(e.currentTarget.todo);\n    }\n}\n\nfunction createTodoUI(e) {\n    const container = document.querySelectorAll('.todo-content');\n    let click = false;\n\n    // container.forEach((todo) => {\n    //     todo.currentTarget.addEventListener('click', () => {\n    //         const description = document.getElementById('description');\n    //         const info = document.getElementById('info');\n    //         if(click === false) {\n    //             description.classList.remove('invisible');\n    //             info.classList.add('visible');\n    //             click = true;\n    //         }else {\n    //             click = false;\n    //             info.classList.remove('visible');\n    //             description.classList.add('invisible');\n    //         }\n    //     });\n    // });\n\n}\n\nfunction createTaskfromInput() {\n    const title = document.getElementById('title-input').value;\n    const description = document.getElementById('description-input').value;\n    const dueDate = document.getElementById('date-input').value;\n    const priority = document.getElementById('priority-select').value;\n\n    let task = new _Task__WEBPACK_IMPORTED_MODULE_2__[\"default\"](title, description, dueDate, priority);\n    return task;\n}\n\nfunction appendTask(task) {\n    const conatiner = document.querySelector('.todo-container');\n    const todoContent = document.createElement('div');\n    const priority = document.getElementById('priority-select').value;\n    todoContent.classList.add('todo-content');\n\n    todoContent.innerHTML = `<div id=\"priority\"></div>\n    <div id=\"info\">\n        <div id=\"title\"> `+ task.title + `</div>\n        <div id=\"description\" class=\"\">`+ task.description + `</div>\n    </div>\n    <div id=\"edit\"><button>edit</button></div>\n    <div id=\"date\">`+ task.dueDate + `</div>\n    <div id=\"delete\"><button class=\"delete\">delete</button></div>`;\n\n    todoContent.querySelector('#priority').style.backgroundColor = task.checkPriority(task.priority);\n    conatiner.appendChild(todoContent);\n\n}\n\nfunction showAddTodoDialog() {\n    const dialog = document.getElementById('todoDialog');\n    const closeBtn = document.getElementById('closeBtn');\n    dialog.showModal();\n\n    closeBtn.addEventListener('click', (e) => {\n        e.preventDefault();\n        dialog.close();\n    });\n}\n\nfunction handleAddingTask(todo) {\n    const dialog = document.getElementById('todoDialog');\n    const form = dialog.querySelector('#todoForm');\n    const listOfProject = document.querySelector('.projects-list');\n    let li = listOfProject.childNodes;\n\n    form.addEventListener('submit', (e) => {\n        e.preventDefault();\n        li.forEach((list) => {\n            if (list.classList.contains('activeProject')) {\n                let task = createTaskfromInput();\n                let currentProject = getCurrentProject(todo);\n                currentProject.addTask(task);\n                console.log(currentProject);\n                updateTasksScreen(todo);\n            }\n        });\n        dialog.close();\n    });\n}\n\nfunction deleteTask(e) {\n    let currentProject = getCurrentProject(e.currentTarget.todo);\n\n    if(e.target.tagName == 'BUTTON'){\n        if(e.target.classList.contains('delete')){\n           \n            let btn = e.target, div = btn.parentNode, contentDiv = div.parentNode, containerDiv = contentDiv.parentNode;\n            let title = contentDiv.childNodes[2].childNodes[1].textContent.trim();\n            currentProject.removeTask(title);\n            console.log(currentProject);\n            containerDiv.removeChild(contentDiv);   \n    }\n}\n \n        \n        //console.log(e.currentTarget.todo.getProjects());\n    \n}\n\nfunction updateTasksScreen(todo) {\n    const container = document.querySelector('.todo-container');\n\n    while (container.hasChildNodes()) {\n        container.removeChild(container.firstChild);\n    }\n\n    let currentProject = getCurrentProject(todo);\n    let tasks = currentProject.getTasks();\n    tasks.forEach((task) => appendTask(task));\n\n}\n\nfunction updateProjectsScreen(projects, title) {\n\n    for (let i = 0; i < projects.length; i++) {\n        if (projects[i].textContent.replace('x', '') == title) {\n            projects[i].classList.add('activeProject');\n            projects[i].classList.remove('disactiveProject');\n        } else {\n            projects[i].classList.add('disactiveProject');\n            projects[i].classList.remove('activeProject');\n        }\n    }\n}\n\nfunction inititializeProject(todo) {\n    const listOfProject = document.querySelector('.projects-list');\n    let li = listOfProject.childNodes;\n\n    if (todo.getProjects()[0].title != '') {\n        let title = todo.getProjects()[0].title;\n        updateProjectsScreen(li, title);\n    }\n}\n\nfunction handleProjectClick(todo) {\n    const listOfProject = document.querySelector('.projects-list');\n    let li = listOfProject.childNodes;\n\n    listOfProject.addEventListener('click', (e) => {\n        if (e.target.tagName == 'LI') {\n            let title = e.target.textContent.replace('x', '');\n            // let newProject = todo.getProject(title);\n             updateProjectsScreen(li, title);\n             updateTasksScreen(todo);\n            // return newProject;\n        }\n    });\n}\n\nfunction getCurrentProject(todo) {\n    const listOfProject = document.querySelector('.projects-list');\n    let li = listOfProject.childNodes;\n    let title;\n    let currentProject;\n\n    for (let i = 0; i < li.length; i++) { \n        if(li[i].classList.contains('activeProject')) {\n            title = li[i].textContent.replace('x', '');\n            currentProject = todo.getProject(title);\n            return currentProject;\n        }\n    }\n\n}\n\nfunction handleUI() {\n    const addProjectBtn = document.querySelector('.add-project-btn');\n    const cancelProjectBtn = document.getElementById('cancel-add-project');\n    const form = document.getElementById('project-form');\n    const addTodoBtn = document.querySelector('.add-todo-btn');\n    const container = document.querySelector('.todo-container');\n    const todo = new _Todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n    appendNewProject(todo.getProjects()[0].title);\n    appendNewProject(todo.getProjects()[1].title);\n    todo.getProjects()[0].addTask(new _Task__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('elo', 'jestem', '2023-12-12', 'Low'));\n    inititializeProject(todo);\n    updateTasksScreen(todo);\n\n    addProjectBtn.addEventListener('click', showProjectForm);\n    cancelProjectBtn.addEventListener('click', cancelProjectForm);\n\n    form.addEventListener('submit', addProject);\n    form.todo = todo;\n\n    document.addEventListener('click', deleteProject);\n    document.todo = todo;\n\n    //bug, enter doesnt submit the form, fix it \n    form.addEventListener('keypress', (e) => {\n        if (e.key === 'Enter') {\n            if (document.getElementById('project-input').value.length < 3) {\n                alert('Enter title with 3 or more letters!');\n            } else {\n                addProject(e);\n            }\n        }\n    });\n\n    //document.addEventListener('click', createTodoUI);\n    addTodoBtn.addEventListener('click', showAddTodoDialog);\n    handleAddingTask(todo);\n\n    container.addEventListener('click', deleteTask);\n    container.todo = todo;\n\n    handleProjectClick(todo);\n}\n\n//# sourceURL=webpack://todo-app/./src/DOM.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n    constructor(title) {\n        this.title = title;\n        this.tasks = [];\n    }\n\n    get projectTitle() {\n        return this.title;\n    }\n\n    set projectTitle(name) {\n        this.title = name;\n    }\n\n    getTasks() {\n        return this.tasks;\n    }\n\n    addTask(task) {\n        return this.tasks.push(task);\n    }\n\n    removeTask(taskTitle) {\n        this.tasks.filter((task, index) => {\n            console.log(taskTitle)\n            console.log(task.taskTitle)\n            if (task.taskTitle === taskTitle) {\n                return this.tasks.splice(index, 1);\n            }\n        });\n\n\n    }\n\n\n\n}\n\n//# sourceURL=webpack://todo-app/./src/project.js?");

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