let input = document.querySelector('#todo-input');
let addBtn = document.querySelector('#add-btn');
let list = document.querySelector('#todo-list');
let p = document.querySelector('.error');


let tasks = [];
function addTask(){ 
    let val = input.value;

    if(val.trim() == ""){
        p.innerText = "Empty task not allowed!";
    }else{
        const obj = {
            id: Date.now(),
            text: val,
            completed: false
        }

        tasks.push(obj);
        saveTasks();
        console.log(tasks);

        renderTask(obj);

        p.innerText = '';
        input.value = '';
    }
}

function deleteTask(li, id){
    list.removeChild(li);
    tasks = tasks.filter(task => task.id !== id)
    saveTasks();
}

function renderTask(task) {
    let li = document.createElement('li');
    li.innerText = task.text;

    if (task.completed) {
        li.classList.add('checked');
    }

    let del = document.createElement('button');
    del.innerText = 'x';

    li.appendChild(del);
    list.appendChild(li);

    li.addEventListener('click', () => {
        li.classList.toggle('checked');
        task.completed = !task.completed;
        console.log(task);
        console.log(tasks);
        saveTasks();
    });

    del.addEventListener('click', (e) => {
        e.stopPropagation();
        deleteTask(li, task.id);
        console.log(tasks);
    });
}

function saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getData(){
    const storedTasks = localStorage.getItem('tasks');
    
    if(storedTasks){
        tasks = JSON.parse(storedTasks);
        console.log(tasks);
        tasks.forEach(task => renderTask(task));
    }
}

getData();

addBtn.addEventListener('click', addTask);
input.addEventListener('keydown', (event)=>{
    if(event.key == 'Enter') addTask();
});

