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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addProject)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\n\nclass Projects {\n    constructor() {\n        this.projects = [];\n    }\n\n    getProjects() {\n        return this.projects;\n    }\n\n    addProject(project) {\n        return this.projects.push(project)\n    }\n\n    removeProject(projectName) {\n        this.projects.filter((project, index) => {\n            if (project.getName() === projectName) {\n                return this.projects.splice(index, 1);\n            }\n        });\n    }\n}\n\nfunction appendNeWProject(project) {\n    const ul = document.querySelector('.projects-list');\n    const list = document.createElement('li');\n    list.textContent = project.getName();\n\n    const deleteSpan = document.createElement('span');\n    deleteSpan.classList.add('delete-project');\n    deleteSpan.textContent = 'x';\n\n    list.appendChild(deleteSpan);\n    ul.appendChild(list);\n\n    return ul;\n}\n\nfunction rmActiveClass(elem) {\n    elem.classList.remove('active');\n    elem.classList.add('hidden');\n\n    return elem;\n}\n\nfunction showAddProjectForm() {\n    const form = document.querySelector('#project-form');\n    form.classList.add('active');\n    form.classList.remove('hidden');\n}\n\nfunction updateProjects(projects) {\n    const input = document.getElementById('project-input');\n    const newProject = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](input.value);\n    projects.addProject(newProject);\n    appendNeWProject(newProject);\n}\n\nfunction removeSpanParent(event) { //remove project from DOM list\n    if (event.target.tagName == \"SPAN\") {\n        let span = event.target, li = span.parentNode, ul = li.parentNode;\n        let projectName = li.textContent.replace('x', '');\n        event.currentTarget.myProjects.removeProject(projectName);\n        ul.removeChild(li);\n    }\n}\n\n\nfunction addProject() {\n    const addProjectBtn = document.querySelector('.add-project-btn');\n    const cancelBtn = document.getElementById('cancel-add-project');\n    let projects = new Projects();\n\n\n    const form = document.querySelector('#project-form');\n\n\n    addProjectBtn.addEventListener('click', showAddProjectForm);\n    document.addEventListener('click', removeSpanParent); //rmeove project from list\n    document.myProjects = projects;\n\n    cancelBtn.addEventListener('click', (event) => {\n        event.preventDefault();\n        rmActiveClass(form);\n    });\n\n    form.addEventListener('submit', (event) => {\n        event.preventDefault();\n        updateProjects(projects);\n        rmActiveClass(form);\n    });\n\n    form.addEventListener('keypress', (e) => {\n        if (e.key === 'Enter') {\n            e.preventDefault();\n            updateProjects(projects);\n            rmActiveClass(form);\n        }\n    });\n\n    //  const removeBtns = document.querySelectorAll('.delete-project');\n    //     removeBtns.forEach(span => {\n    //         span.addEventListener('click', (e) => {\n\n    //             let projectLi = span.parentNode;\n    //             let projectUl = projectLi.parentNode;\n    //             let projectName = projectLi.textContent.replace('x', '');\n    //             projectUl.removeChild(projectLi);\n    //             projects.removeProject(projectName);\n    //             console.log('hej');\n    //         });\n    //     });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    console.log(projects);\n}\n\n//# sourceURL=webpack://todo-app/./src/DOM.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n\n\n\nlet project = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Gym');\n(0,_DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://todo-app/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n    constructor(name){\n        this.name = name;\n        this.arrOfTasks = [];\n    }\n\n    setName(value) {\n        this.name = value;\n    }\n\n    getName() {\n        return this.name;\n    }\n\n    setArrOfTasks(tasks){\n       this.arrOfTasks = tasks;\n    }\n\n    getArrOfTasks() {\n        return this.arrOfTasks;\n    }\n\n    getTask(taskName) {\n        return this.arrOfTasks.find(task => task.name === taskName);\n    }\n\n    isTaskNameTaken(taskName) {\n         return this.arrOfTasks.some(task => task.name === taskName);\n    }\n\n    addTask(task) {\n        return this.arrOfTasks.push(task);\n    }\n\n}\n\n// export default function createProjects() {\n//     let project = new Project('Gym');\n//     console.log(project.getName());\n\n//     project.setArrOfTasks( [{name:'Do abs', description:'', priority:'High'},{name:'Do abs', description:'', priority:'Low'}]);\n//     console.log(project.getArrOfTasks())\n\n//     let secTask = ({name:'Do sth', description:'', priority:'Low'});\n//     if(project.isTaskNameTaken(secTask.name) === false){\n//         project.addTask(secTask);\n//     }\n    \n//     console.log(project.getArrOfTasks());\n//     let task = project.getTask('Do abs')\n//     console.log(task.name)\n    \n   \n// }\n\n\n//# sourceURL=webpack://todo-app/./src/project.js?");

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