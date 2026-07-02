let input = document.querySelector('#todo-input');
let addBtn = document.querySelector('#add-btn');
let list = document.querySelector('#todo-list');
let p = document.querySelector('.error');

function addTask(){
    let li = document.createElement('li');
    let val = input.value;

    let del = document.createElement('button');
    del.innerText = 'x';

    if(val.trim() == ""){
        p.innerText = "Empty task not allowed!";
    }else{
        li.innerText = val;
        list.appendChild(li);
        li.appendChild(del);
        p.innerText = '';

        li.addEventListener('click', ()=>{
            li.classList.toggle('checked')
            // saveData();
        });
    }
    input.value = '';
    
    del.addEventListener('click', ()=>{
        list.removeChild(li);
        // saveData();
    }); 

    // saveData();
}

addBtn.addEventListener('click', addTask);
input.addEventListener('keydown', (event)=>{
    if(event.key == 'Enter') addTask();
});
 
// function saveData(){
//     localStorage.setItem('data', list.innerHTML)
// }

// function showData(){
//     list.innerHTML = localStorage.getItem('data');
// }

// showData();

// let clearBtn = document.querySelector('.clearAll');

// clearBtn.addEventListener('click', ()=>{
//     list.innerHTML = '';
//     localStorage.removeItem('data');
// })