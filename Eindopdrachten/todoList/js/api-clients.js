const  API_URL =  "https://wincacademydatabase.firebaseio.com/Ramsey/Tasks"
// request handeler
const handleRequest = async (apiUrl,method, body) => {
    try {
        const response = await fetch(apiUrl, {method: method, body: JSON.stringify(body)
        });
        const data = await response.json();
        return data
    } catch (error){
        console.log(error)
    }
}
// Request Type handelers

const getTasks = async () => {
    data = [];
    await handleRequest(`${API_URL}.json`, "GET")
        .then(convertResults)
        .then(tasks => {
            data = tasks;
        })
    return data
};
// Post a new task to the database
const postTasks = async (body, done = false) => {
    await handleRequest(`${API_URL}.json`, "POST", {description: body, done: done})
}
const deleteTask = async (id) => {
    console.log(id);
    await handleRequest(`${API_URL}/${id}.json`, "DELETE")
}

// convert hasj results. 
const convertResults = result => {
    if (result) {
        const tasks = Object.keys(result).map(key => ({
            id: key,
            description: result[key].description,
            done: result[key].done
        }));
        return tasks
    }
}

