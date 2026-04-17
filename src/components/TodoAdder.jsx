import { useState } from 'react'
import Button from './Button.jsx'

export default function TodoAdder({ addTodo }) {
    const [inputTodo, setInputTodo] = useState(''); // inputTodo : 사용자가 입력한 text
    const handleSubmit = (event) => {
        event.preventDefalut();
        if (!inputTodo) return;
        // inputTodo에서 사용자가 입력한 text 가져오자
        // addTodo에 그 text 넣자 
        addTodo(inputTodo.trim());
        setInputTodo('');
    }
    return (
        <>
            <form className='todo_form' onSubmit={handleSubmit}>
                <input type="text"
                 placeholder="할일을 입력하세요."
                  className='todo__input'
                  value={inputTodo}
                  onChange={(event) => setInputTodo(event.target.value)}
                />
                <Button type='submit' className='todo__button todo__button--add'>Add</Button>
            </form>
        </>
    )
}