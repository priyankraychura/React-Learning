import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, selectTodo } from '../Features/todo/todoSlice'

export default function Todo() {
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({})
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Todo</h1>
      {
          <ul>
            {todos.map(todo => (
              <li key={todo.id}>
                {todo.id} - {todo.task} - {todo.priority}
                <button onClick={() => dispatch(removeTodo(todo.id))}>delete</button>
                <button onClick={() => dispatch(selectTodo(todo))}>Edit</button>
              </li>
            ))}
          </ul>
      }
    </div>
  )
}
