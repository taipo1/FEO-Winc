const taskContainer = document.getElementById('task-container')
const addTask = document.getElementById('add-task');
const trashArray = document.getElementsByClassName('trash')
let dataArray = [];



// functions
// store Data and push to array for html handeling
const storeData = async () => {
    dataArray = [];
    const data = await getTasks();
    if (data){
        data.forEach(element => {
            dataArray.push(element);
        });
    }else {
        console.log("No Data");
    }
}
const addButtonEvent = () => {
    Array.from(trashArray).forEach(button => {
        button.addEventListener("click", async () => {
            await deleteTask(button.parentElement.id);
            await initList();
        })
    })
}

const initList = async ()  => {
    await storeData ();
    removeTaskList();
    dataArray.forEach(task => {
        generateChildElement(taskContainer, 'li', task.id, `${task.description}`)
    })
    addButtonEvent();
}

const generateChildElement = ((parent, element, selector , innerHTML) =>{
    const container = document.createElement(element);
    container.id = selector;
    parent.appendChild(container);
    container.innerHTML = innerHTML + '<button class="trash">Finish</button>';
    return container;
});

// functionality
addTask.onsubmit = () =>{
    const value = document.getElementById('input').value;
    postTasks(value)
    addTask.reset();
    initList()
    return false;
};

const removeTaskList= () => {
    let child = taskContainer.getElementsByTagName('li')[0];
    Array.from(taskContainer.getElementsByTagName('li')).forEach(li => {        
        taskContainer.removeChild(li);
    });
};

initList()
