import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos: [{id: 1, task: "Hello world"}],
    selectedTodo: null
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        selectTodo: (state, action) => {
            state.selectedTodo = action.payload
        },
        updateTodo: (state, action) => {
            const { id, task, priority } = action.payload;
            const existingTodo = state.todos.find(task => task.id === id);
            if (existingTodo) {
                existingTodo.task = task;
                existingTodo.priority = priority;
                state.selectedTodo = null;
            }
          },
    }
})

export const {addTodo, removeTodo, selectTodo, updateTodo} = todoSlice.actions
export default todoSlice.reducer