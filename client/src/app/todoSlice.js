import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
}

const todo = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    addTodoSuccess(state, action) {
      state.todos.push(action.payload)
      console.log('this is state todoSLice', state);
      console.log('This is action todoSLice', action);
    }
  }
})

export const { addTodoSuccess } = todo.actions

export default todo.reducer
