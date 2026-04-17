import { useState } from 'react'
import './todolist.css'
import TodoHeader from './components/TodoHeader.jsx'
import TodoAdder from './components/TodoAdder.jsx'
import TodoList from './components/TodoList.jsx'

class Todo {
    constructor (text) { 
        this.id = Date.now(); 
        this.text = text; 
        this.isCompleted = false; 
    }
}

function TodoListApp() {
    const [todos, setTodos] = useState([]); 

    const addTodo = (text) => {
        setTodos((prevTodos) => [...prevTodos, new Todo(text)]);
    };

    return (
        <div className="todo">
            <TodoHeader />
            <TodoAdder addTodo={addTodo} />
            <TodoList todos={todos} />
        </div>
    )
}

export default TodoListApp;