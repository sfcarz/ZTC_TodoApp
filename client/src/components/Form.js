import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoSuccess } from '../app/todoSlice';

const Form = ({ setInputText, inputText, todos, setTodos, setStatus }) => {
  const dispatch = useDispatch();
  const { todos: allTodo } = useSelector(state => state.todo)
  const inputTextHandler = (e) => {
    // console.log('inputTextHandler in Form.js', e.target.value);
    setInputText(e.target.value);
  };

  const statusHandler = (e) => {
    setStatus(e.target.value)
    console.log('statusHandler in Form.js', e.target.value);
  };

  const handleSubmit = async (e) => {
    // e.preventDefault()
    //send request
    await axios.post('/api/todo', { todo: inputText });
  }

  const submitTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodoSuccess(inputText));
    setTodos([
      ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
    ]);
    setInputText('');
    console.log('submitTodoHandler in Form.js');
    handleSubmit();
  };

  return (
    <div>
      {allTodo.map(todo => <p>{ todo }</p>)}
      <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
  </div>
  );
}

export default Form;