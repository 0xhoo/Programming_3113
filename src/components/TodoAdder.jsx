import { useState } from 'react'
import Button from './Button.jsx'

export default function TodoAdder({ addTodo }) {
    const [inputTodo, setInputTodo] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // 오타 수정
        if (!inputTodo) return;

        addTodo(inputTodo.trim());
        setInputTodo('');
    }

    return (
        <form className='todo_form' onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="할일을 입력하세요."
                className='todo__input'
                value={inputTodo}
                onChange={(event) => setInputTodo(event.target.value)}
            />
            <Button type='submit' className='todo__button todo__button--add'>Add</Button>
        </form>
    )
}