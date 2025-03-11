import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos } from './features/sliceAPI'
import './App.css'

function App() {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.todo);

  if (state.isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <button onClick={() => dispatch(fetchTodos())}>Fetch Data</button>
      <ol style={{textAlign: 'left'}}>
        {
          state.data && state.data.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))
        }
      </ol>
    </>
  )
}

export default App
