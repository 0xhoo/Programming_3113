function TodoListApp() {
    return (
        <div>
            <h1>ToDo List</h1>
            <form>
                <input type="text"></input><button>Add</button>
            </form>
            <ul>
                <li>
                    <input type="checkbox" name="" id=""></input> 
                    <label htmlFor="">놀기 </label>
                    <button>✏️</button> 
                    <button>❌</button>
                </li>
                <li>
                    <input type="checkbox" name="" id=""></input> 
                    <label htmlFor="">집가기 </label>
                    <button>✏️</button> 
                    <button>❌</button>
                </li>
            </ul>
        </div>
    )
}

export default TodoListApp;