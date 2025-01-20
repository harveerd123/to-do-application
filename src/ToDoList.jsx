import {useState} from 'react'

function ToDoList() {

    const[tasks, setTasks] = useState(["Eat breakfast", "Take a shower", "Walk the dog"]); //set initial state of tasks array
    const[newTask, setNewTask] = useState(""); //set initial state of newTask

    function handleInputChange(event) {
        setNewTask(event.target.value); //can alter input field with this new text

    }

    function addTask() {

        if(newTask.trim() !== "") {
            setTasks(t => [...t, newTask]); //spread previous state of tasks and add new task
            setNewTask(""); //set input field text back to blank
        }

    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((item, i) => i !== index); //filter creates new array 
        setTasks(updatedTasks);

    }

    function moveTaskUp(index) {
        if(index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }

    function moveTaskDown(index) {
        if(index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }

    return(
        
        <div className="to-do-list">
        
            <h1>To Do List</h1>

            <div>
                <input 
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button
                    className="add-button"
                    onClick={addTask}>
                    Add
                </button>
            </div>

            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className="text">
                            {task}
                        </span>
                        <button
                            className="delete-button"
                            onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button
                            className="move-button"
                            onClick={() => moveTaskUp(index)}>
                            Move Up
                        </button>
                        <button
                            className="move-button"
                            onClick={() => moveTaskDown(index)}>
                            Move Down
                        </button>
                    </li>
                
                )}
            </ol>


        </div>
    )
}

export default ToDoList;