import React, {useState} from 'react'
import axios from 'axios'

const AddTodo = () => {
    const [todo, setTodo] = useState('')
    const handleInput = (e) => {
        const {name, value} = e.target
        setTodo(value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        //send request
        await axios.post('/api/addTodo', {todo:todo})
        setTodo('')
    }
    return (
        <div>
            <form>
                <input name="todo" value={todo} onChange={handleInput}/>
                <button onClick={handleSubmit}>Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo
