// SELECTEURS 
let todoInput = document.querySelector('.todoInput')
let btnAdd = document.querySelector('#addButton')

let btnTermine = document.querySelector('#btnMenu1')
let btnAFaire = document.querySelector('#btnMenu2')
let btnTout = document.querySelector('#btnMenu3')

let todoList = document.querySelector('.todoList')

let btnClear = document.querySelector('#clearBtn')


// EVENTS
// Ajouter une tâche
btnAdd.addEventListener('click', addToDo)
todoInput.addEventListener('keyup', (e)=> {
    if (e.keyCode === 13) {
        addToDo(e)
    }
})
// Clear List
btnClear.addEventListener('click', clearAction)

// MENUS
btnTermine.addEventListener('click', termineMenu)
btnAFaire.addEventListener('click',afaireMenu)
btnTout.addEventListener('click',toutMenu)

// Actions des boutons
// Dans la fonction addToDo

// FUNCTIONS
function addToDo () {
    // Créer la div qui contiendra texte et btn 
    let divTodo = document.createElement('div')
    divTodo.classList.add('divTodo')
    todoList.appendChild(divTodo)
    // Créer le texte
    let texteTodo = document.createElement('p')
    texteTodo.classList.add('texteTodo')
    texteTodo.innerText = todoInput.value
    divTodo.appendChild(texteTodo)
    // Créer div des boutons
    let divBtns = document.createElement('div')
    divBtns.classList.add('divBtns')
    divTodo.appendChild(divBtns)
    // Créer bouton CHECK
    let checkBtn = document.createElement('button')
    checkBtn.innerHTML = '<i class="fas fa-check"></i>'
    checkBtn.classList.add('checkBtn')
    divBtns.appendChild(checkBtn)
    console.log(checkBtn);
    // Créer bouton DELETE
    let deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>'
    deleteBtn.classList.add('deleteBtn')
    divBtns.appendChild(deleteBtn)
    // Créer bouton EDIT
    let editBtn = document.createElement('button')
    editBtn.innerHTML = '<i class="fas fa-edit"></i>'
    editBtn.classList.add('editBtn')
    divBtns.appendChild(editBtn)
    // Input
    todoInput.value = ""
    // ACTIONS
    // Check
    checkBtn.addEventListener('click', checkAction)
    function checkAction (e) {
        let item = e.target;
        if (item.classList[0] === "checkBtn") {
            let parentItem = item.parentElement.parentElement
            parentItem.classList.toggle("checked")
            // parentItem.classList.toggle("none")
            console.log(parentItem);
        }
    }
    // Delete
    deleteBtn.addEventListener('click', deleteAction)
    function deleteAction (e) {
        let item = e.target;
        if (item.classList[0] === "deleteBtn") {
            let parentItem = item.parentElement.parentElement
            parentItem.remove()
        }
    }
    // Edit
    divTodo.addEventListener('click', editActionBtn)
    function editActionBtn(e) {
        let item = e.target;
        if (item.classList[0] === "editBtn") {
            let leTexte = item.parentElement.previousSibling
            let newInput = document.createElement("input")
            newInput.value = leTexte.innerText
            leTexte.innerText = ""
            leTexte.appendChild(newInput)
            item.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) {
                    item.innerText = newInput.value
                }
            })
        } else if (item.classList[0] === "texteTodo") {
            let leTexte2 = item.innerText
            let newInput2 = document.createElement("input")
            newInput2.value = leTexte2
            item.innerText = ""
            item.appendChild(newInput2)
            item.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) {
                    item.innerText = newInput2.value
                }
            })
        }
    }
}

// Clear 
function clearAction () {
    document.querySelector(".todoList").innerHTML = "";
}

// LES MENUS
// MENU TERMINE - CHECKED

function termineMenu() {
    // classes sans "checked" : display-none
    let tabNode = todoList.children
    var tab = Array.from(tabNode)
    console.log(tab[0].classList);
    tab.forEach(element => {
        element.classList.remove("none")
        if (element.classList == "divTodo checked") {
        } else {
            element.classList.add("none")
        }
    });
}

// MENU A FAIRE

function afaireMenu() {
    let tabNode = todoList.children
    var tab = Array.from(tabNode)
    tab.forEach(element => {
        element.classList.remove("none")
        if (element.classList == "divTodo") {
        } else {
            element.classList.add("none")
        }
    });
}

// MENU TOUT

function toutMenu() {
    let tabNode = todoList.children
    var tab = Array.from(tabNode)
    tab.forEach(element => {
        element.classList.remove("none")
    });
}