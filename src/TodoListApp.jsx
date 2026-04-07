import './todolist.css'

function TodoListApp() {
    return (
        <div className="todo">
            <h1>ToDo List</h1>
            <form className='todo_form'>
                <input type="text" placeholder="할일을 입력하세요." className='todo__input'></input>
                <button type='submit' className='todo__button todo__button--add'>Add</button>
            </form>
            <ul className='todo__list'>
                <li className='todo__item todo__item--complete'>
                    <input type="checkbox" id="chk-1" className='todo__check'></input> 
                    <label htmlFor="" className='todo__label'>놀기 </label>
                    <button className='todo__button todo__button--edit'>✏️</button> 
                    <button className='todo__button todo__button--delete'>❌</button>
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